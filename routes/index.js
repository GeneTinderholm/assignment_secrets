var express = require("express");
var router = express.Router();
const models = require("../models/");
const User = models.User;
const Secret = models.Secret;

router.get("/", async (req, res, next) => {
  let user = await User.findById(req.session.userId);
  let secretArray = [];
  user = await User.findById(req.session.userId, {});
  console.log(user);
  for (let i = 0; i < user.secrets.length; i++) {
    secretArray[i] = await Secret.find({
      _id: user.secrets[i]
    });
    secretArray[i] = secretArray[i][0];
  }
  console.log(secretArray);
  res.render("index", { secretArray });
});

router.post("/", async (req, res, next) => {
  let secret = req.body.secret || "";
  let userId = req.session.userId;
  let user = await User.findById(userId);
  let secretObj = new Secret({ body: secret, userSubmitted: userId });
  console.log(secret, userId, user, secretObj);
  user.secrets.push(secretObj._id);
  await secretObj.save();
  await User.findByIdAndUpdate(user.id, user);
  res.redirect("/");
});
module.exports = router;
