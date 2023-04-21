const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const cloudinary = require('cloudinary').v2;
const express = require('express');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
const jwt = require('jsonwebtoken');

//Load environment variables
require('dotenv').config({ path: path.join(__dirname, '.', '.env') });

//Load api Routes
const api = require('./routes/api');

const config = {
  CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
};

const AUTH_OPTIONS = {
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
};

// function verifyCallback(accessToken, refreshToken, profile, done) {
//   console.log('Google profile', profile);
//   done(null, profile);
// }
const allowedAdmins = ['giomar.developer@gmail.com'];

function verifyCallback(accessToken, refreshToken, profile, done) {
  // console.log('Profile', profile);

  // Check if the email is allowed to access the admin area
  const userEmail = profile.emails[0].value;
  const isAdmin = allowedAdmins.includes(userEmail);

  if (isAdmin) {
    done(null, profile);
  } else {
    done(new Error('You are not authorized to access this area.'));
  }
}

// Initialize passport with Google OAuth strategy
passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

//Initialize express
const app = express();

// Middlewares

// Security headers
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      'script-src': [
        "'self'",
        'https://www.youtube.com',
        'https://s.ytimg.com',
      ],
      'img-src': [
        "'self'",
        'data:',
        'https://www.youtube.com',
        'https://www.cloudinary.com',
        'https://res.cloudinary.com',
        'blob:',
      ],
      'frame-src': ["'self'", 'https://www.youtube.com'],
    },
  })
);
app.use(passport.initialize()); // Passport initialization
app.use(cors({ origin: 'http://localhost:3000' })); // Enable CORS for a specific origin
app.use(express.json()); // Parse JSON request bodies
app.use(express.static(path.join(__dirname, '..', 'public'))); // Serve static files
app.use('/v1', api); // API routes

// Error handling middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: { message: error.message } });
  next();
});

// Google OAuth routes

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);

function createJWT(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.emails[0].value,
      name: user.displayName,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
}

app.get('/auth/google/callback', (req, res, next) => {
  passport.authenticate('google', { session: false }, (err, user) => {
    if (err) {
      console.error('Error:', err.message);
      return res.redirect('/admin/login?error=unauthorized');
    }
    if (!user) {
      return res.redirect('/admin/login?error=unauthorized');
    }

    const token = createJWT(user);
    console.log('Token', token);
    return res.redirect(`/admin/dashboard?token=${token}`);
  })(req, res, next);
});

app.get('/auth/logout', (req, res) => {
  req.logout();
  res.redirect('/admin/login');
});

// Fallback route for single-page applications
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
