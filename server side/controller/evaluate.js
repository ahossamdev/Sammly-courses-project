const Course = require("../models/courses");

const createComment = (courseId, comment) => {
  console.log("inside create course");
  return Course.findOneAndUpdate(
    { _id: courseId },
    { $push: { comments: comment } },
    { new: true }
  );
};
const createRate = (courseId, rate) => {
  console.log("inside create course");
  return Course.findOneAndUpdate(
    { _id: courseId },
    { $push: { rates: rate } },
    { new: true }
  );
};

module.exports = { createComment, createRate };
