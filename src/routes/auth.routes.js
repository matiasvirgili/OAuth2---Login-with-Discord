const { Router } = require('express');
const passport = require('passport');
const { isNotAuthorized, isAuthorized } = require('../helpers/auth');

const router = Router();

router.get('/', isNotAuthorized, passport.authenticate('discord'));

router.get(
  '/redirect',
  passport.authenticate('discord', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
  })
);

router.get('/logout', isAuthorized, (req, res) => {
  req.logout();
  res.redirect('/');
});
module.exports = router;
