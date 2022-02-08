require('dotenv').config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const SECRET = process.env.SECRET || 'some random secret';
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;

module.exports = {
  PORT,
  MONGODB_URI,
  SECRET,
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
};
