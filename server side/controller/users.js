const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const { GoogleAuth, OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT);

// Register Function :

const register = async (query) => {
  const email = query.email;
  const username = query.username;
  const userEmail = await User.findOne({ email });
  const userUserName = await User.findOne({ username });
  if (userEmail) {
    return {
      errMessage: "this email already exist !",
    };
  } else if (userUserName) {
    return { errMessage: "this username already exist !" };
  } else {
    return User.create(query);
  }
};

// Get User :

const find = (query, projection) => User.find(query, projection);

const findOne = (query, projection) => User.findById(query, projection);

// Remove User :

const remove = (userId) => User.findByIdAndDelete(userId);

//Login Function :

const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    return { errMessage: "invalid user name or pasword !" };
  }
  const isValid = bcrypt.compareSync(password, user.password);
  if (!isValid) {
    return {
      errMessage: "invalid user name or pasword !",
    };
  }
  const Token = jwt.sign(
    {
      email,
      _id: user.id,
      maxAge: "5d",
    },
    process.env.TOKEN || "ashdhasdkasfhlasdfhask;dfjasdgfadsk"
  );
  console.log(user.password);
  return { token: Token };
};

//update user :

const update = (userId, newData) =>
  User.findByIdAndUpdate(userId, newData, {
    new: true,
    runValidators: true,
  });

//Google login :

const googleLogin = async (token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT,
  });
  return ({ name, email } = ticket.getPayload);
};

module.exports = {
  find,
  findOne,
  update,
  remove,
  googleLogin,
  login,
  register,
};
