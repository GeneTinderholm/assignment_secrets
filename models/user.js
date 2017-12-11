var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  fname: String,
  lname: String,
  username: String,
  email: String,
  secrets: [{
    type: Schema.Types.ObjectId,
    ref: "Secret"
  }]
}, {
  timestamps: true
});


var User = mongoose.model('User', UserSchema);

module.exports = User;
