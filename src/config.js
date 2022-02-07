require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;

module.exports = {
  MONGODB_URI,
  PORT,
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
};
