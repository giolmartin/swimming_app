const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const express = require('express');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');

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

function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log('Google profile', profile);
  done(null, profile);
}

// Initialize passport with Google OAuth strategy
passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

//Initialize express
const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(passport.initialize()); // Passport initialization
app.use(cors({ origin: 'http://localhost:3000' })); // Enable CORS for a specific origin
app.use(express.json()); // Parse JSON request bodies
app.use(express.static(path.join(__dirname, '..', 'public'))); // Serve static files

//API routes
// app.use('/v1', api);

// Google OAuth routes
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/admin-login', // Redirect to the admin login page on failure
    successRedirect: '/admin-dashboard', // Redirect to the admin dashboard on success
    session: false, // do not save user data in session
  }),
  (req, res) => {
    console.log('Callback');
  }
);

// Logout route (TODO: implement logout)
app.get('/auth/logout', (req, res) => {});

// Fallback route for single-page applications
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
// {
//     contentSecurityPolicy: {
//       directives: {
//         defaultSrc: ["'self'"],
//         connectSrc: ["'self'", 'https://accounts.google.com'], // Add Google authentication URL here
//       },
//     },
//   }
