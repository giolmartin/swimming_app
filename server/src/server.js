const fs = require('fs');
const https = require('https');
// const dotenv = require('dotenv');

// //Load environment variables
// dotenv.config();

const app = require('./app');
const PORT = process.env.PORT || 8000;

//Development certificate for localhost
//using openssl to generate a self-signed certificate
//openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365
// Read the private key and certificate files
const privateKey = fs.readFileSync('key.pem', 'utf8');
const certificate = fs.readFileSync('cert.pem', 'utf8');

// Create a credentials object
const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);
async function startServer() {
  try {
    httpsServer.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
