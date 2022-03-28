const joi = require("@hapi/joi");
const authComments = joi.object({
  comment: joi.string().required(),
});
module.exports = authComments;
