const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  username: {
    type: "string",
    require: [true, "this filed is required!"],
    unique: [true, "this username is used!"],
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  age: { type: "number" },
  password: {
    type: "string",
    required: true,
  },
  firstName: { type: "string", required: true },
  lastName: { type: "string", required: true },
  phoneNumber: { type: "number" },
  about: { type: "string" },
  userImage: {
    type: "string",
    default:
      "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
  },
});
userSchema.pre("save", function () {
  console.log(this);
  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
});

const User = mongoose.model("User", userSchema);
module.exports = User;
