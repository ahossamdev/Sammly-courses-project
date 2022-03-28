const Form = require("../models/formTrainer");

const create = (form) => Form.create(form);
const find = (query, projection) => Form.find(query, projection);
const findOne = (query, projection) => Form.findById(query, projection);
// const remove = (trainerId) => Form.findByIdAndDelete(trainerId);
// const update = (trainerId, newData) =>
//   Form.findByIdAndUpdate(trainerId, newData, {
//     new: true,
//     runValidators: true,
//   });

module.exports = { create, find, findOne };
