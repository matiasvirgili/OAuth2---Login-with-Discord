const express = require('express');
const path = require('path');
//Routes
const routeIndex = require('./routes/index.routes');
const routeAuth = require('./routes/auth.routes');
const routeDashboard = require('./routes/dashboard.routes');

const app = express();

//Settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', routeIndex);
app.use('/auth', routeAuth);
app.use('/dashboard', routeDashboard);

module.exports = app;
