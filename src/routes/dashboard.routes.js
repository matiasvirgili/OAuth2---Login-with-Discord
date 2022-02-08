const { Router } = require('express');
const { isAuthorized } = require('../helpers/auth');

const router = Router();

router.get('/', isAuthorized, (req, res) => {
  res.render('dashboard', {
    guilds: req.user.guilds,
  });
});

router.get('/settings', isAuthorized, (req, res) => {
  res.send('Settings');
});

module.exports = router;
