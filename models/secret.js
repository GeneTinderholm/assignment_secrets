var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SecretSchema = new Schema(
  {
    body: String,
    usersRequesting: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    userSubmitted: Schema.Types.ObjectId
  },
  {
    timestamps: true
  }
);

var Secret = mongoose.model("Secret", SecretSchema);

module.exports = Secret;
