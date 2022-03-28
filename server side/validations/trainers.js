const joi = require("@hapi/joi");
const authTrainer = joi.object({
  firstName: joi.string(),
  lastName: joi.string(),
  job: joi.string(),
  about: joi.string(),
  experience: joi.string(),
  about: joi.string(),
  course: joi.string(),
});
module.exports = { authTrainer };
