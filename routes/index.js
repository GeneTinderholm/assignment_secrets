var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  }
  res.render('index');
}

router.get('/secrets', (req, res, next) => {
  
});
module.exports = router;
