const Contact = require("../models/contact");
const find = (query) => Contact.find(query);
const findOne = (id) => Contact.findById(id);
const create = (body) => Contact.create(body);
// const update = (id, newData) =>
//   Contact.findByIdAndUpdate(id, newData, { new: true, runValidators: true });
// const remove = (id) => Contact.findByIdAndDelete(id);

module.exports = { find, findOne, create};
