const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    discordId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    guilds: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', UserSchema);
