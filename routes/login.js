var express = require("express");
var router = express.Router();
const models = require("../models/");
const User = models.User;
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.render("login");
});
router.post("/", async (req, res) => {
  let username = req.body.username;
  let user = await User.find({
    username: username
  });
  user = user[0];
  res.session = req.session || {};
  res.session.loggedIn = user.validatePassword(req.body.password);
  res.session.userId = user.id;
  res.redirect("/");
});

module.exports = router;
