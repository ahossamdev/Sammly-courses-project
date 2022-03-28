const { object } = require("@hapi/joi");
const mongoose = require("mongoose");

// review schema

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// course schema :

const coursesSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: "Enter a course name",
    },
    comments: [],
    rates: [],
    description: {
      type: "string",
      required: "enter course description",
    },
    requirement: {
      type: Array,
    },
    created_by: {
      type: "string",
    },
    created_date: {
      type: Date,
      default: Date.now,
    },
    short: {
      type: "string",
      required: "enter short description for the course",
    },
    starting_date: {
      type: Date,
      default: Date.now,
    },
    finishing_date: {
      type: Date,
      required: true,
    },
    learning: {
      type: Array,
    },
    videosList: {
      type: Array,
    },
    courseImage: {
      type: "string",
    },
  },
  { timestamps: true }
);
const Course = mongoose.model("Course", coursesSchema);
module.exports = Course;
