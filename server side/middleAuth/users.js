const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = function (req, res, next) {
  const token = req.header("token");
  // console.log(token);
  if (!token)
    return res.status(401).send("Access denied, please login first !");
  try {
    const payLoad = jwt.verify(token, process.env.TOKEN);
    // console.log(payLoad);
    req.user = payLoad;
    next();
  } catch (err) {
    res.status(400).send("Invalid token!");
  }
};
