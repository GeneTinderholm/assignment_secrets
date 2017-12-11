var express = require("express");
var router = express.Router();
const models = require('../models/user.js');
const User = models.User;
const bcrypt = require('bcrypt');

router.get("/", (req, res) => {
  res.render("login");
});
router.post("/", async (req, res) => {
   let username = req.body.username;
   let passHash = bcrypt.hashSync(req.body.password, 8);
   let user = await User.find({
     where: {
       username: username,
       password: req.body.username
});

module.exports = router;
