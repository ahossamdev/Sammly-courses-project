const express = require("express");
const auth = require("../middleAuth/users.js");
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
  fileFilter: fileFilter,
});
const {
  create,
  find,
  findOne,
  remove,
  update,
} = require("../controller/courses");
const authCourses = require("../validations/courses");

//get all comments:

router.get("/", auth, async (req, res, next) => {
  let { page, size } = req.query;
  if (!page) {
    page = 1;
  }
  if (!size) {
    size = 20;
  }
  const limit = parseInt(size);
  const skip = parseInt(page - 1) * size;
  try {
    const courses = await find();

    res.status(202).json(courses);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

//get comment by id:

router.get("/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const course = await findOne(_id).populate();
    res.status(202).json(course);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

//post comment:

router.post("/", auth, upload.single("courseImage"), async (req, res) => {
  try {
    // await authCourses.validateAsync(req.body);
    const course = {
      name: req.body.name,
      courseImage: req.file.path,
      description: req.body.description,
      rate: req.body.rate,
      requirement: req.body.requirement,
      created_by: req.body.created_by,
      short: req.body.short,
      starting_date: req.body.starting_date,
      finishing_date: req.body.finishing_date,
      learning: req.body.learning,
      videosList: req.body.videosList,
    };
    const response = await create(course);
    res
      .status(202)
      .json({ data: response, message: "course added successfully !" });
  } catch (err) {
    res.status(404).json(err.message);
  }
});

//update comment:

router.patch("/:id", auth, async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    newCourse = await update(_id, body);
    res
      .status(202)
      .json({ data: newCourse, message: "course updated successfully!" });
  } catch (err) {
    res.status(202).json(err.message);
  }
});

//delete comment:

router.delete("/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    await remove(_id);
    res.status(202).json("course deleted successfully");
  } catch (err) {
    res.status(404).json(err.message);
  }
});
module.exports = router;
