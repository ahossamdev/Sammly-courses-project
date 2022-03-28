const joi = require("@hapi/joi");
const authSchema = joi.object({
  email: joi.string().email().lowercase().required(),
  username: joi.string().lowercase().required().trim().min(4),
  password: joi.string().lowercase().required().trim().min(8),
  firstName: joi.string().lowercase().required().min(3).max(14).required(),
  lastName: joi.string().required().min(3).max(14).required(),
});
module.exports = { authSchema };
