const Trainer = require("../models/trainers");

const create = (trainer) => Trainer.create(trainer);
const find = (query, projection) => Trainer.find(query, projection);
const findOne = (query, projection) => Trainer.findById(query, projection);
const remove = (trainerId) => Trainer.findByIdAndDelete(trainerId);
const update = (trainerId, newData) =>
  Trainer.findByIdAndUpdate(trainerId, newData, {
    new: true,
    runValidators: true,
  });

module.exports = { create, find, findOne, remove, update };
