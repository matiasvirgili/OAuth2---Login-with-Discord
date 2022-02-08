const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');

require('./strategies/discordStrategy');

//Routes
const routeIndex = require('./routes/index.routes');
const routeAuth = require('./routes/auth.routes');
const routeDashboard = require('./routes/dashboard.routes');

const app = express();

//Settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Midlewares
app.use(
  session({
    secret: 'some secret',
    saveUninitialized: false,
    resave: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Global variables
app.use((req, res, next) => {
  app.locals.user = req.user;
  next();
});

//Routes
app.use('/', routeIndex);
app.use('/auth', routeAuth);
app.use('/dashboard', routeDashboard);

module.exports = app;
