var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  }
}
  res.send('respond with a resource');
});

module.exports = router;
