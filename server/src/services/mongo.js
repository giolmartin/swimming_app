const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
  console.log('MongoDB connection open');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

mongoose.set('strictQuery', false);

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
  console.log('Connected to MongoDB');
}

async function mongoDisconnect() {
  await mongoose.connection.close();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
