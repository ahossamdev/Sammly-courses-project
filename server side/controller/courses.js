const Course = require("../models/courses");

const find = (query) => Course.find(query);
const findOne = (id) => Course.findById(id);
const create = (body) => Course.create(body);
const update = (id, newData) =>
  Course.findByIdAndUpdate(id, newData, { new: true, runValidators: true });
const remove = (id) => Course.findByIdAndDelete(id);

module.exports = { find, findOne, create, update, remove };
