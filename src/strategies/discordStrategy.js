const {
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
  DISCORD_CLIENT_REDIRECT,
} = require('../config');
const User = require('../models/User');
const passport = require('passport');
const { Strategy } = require('passport-discord');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  if (user) done(null, user);
});

passport.use(
  new Strategy(
    {
      clientID: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET,
      callbackURL: DISCORD_CLIENT_REDIRECT,
      scope: ['identify', 'guilds'],
    },
    async (accesToken, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({ discordId: profile.id });

        if (user) return done(null, user);

        const newUser = new User({
          discordId: profile.id,
          username: profile.username,
          guilds: profile.guilds,
        });

        await newUser.save();
        done(null, newUser);
      } catch (error) {
        console.log(error);
        return done(error, null);
      }
    }
  )
);
