const { authTrainer } = require("../validations/trainers");
const express = require("express");
const router = express.Router();
const auth = require("../middleAuth/users");
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
} = require("../controller/trainers");
const corsOption = {
  origin: "localhost:3001",
  optionsSuccessStatus: 200,
};

router.get("/", auth, (req, res) => {
  find({}, {})
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json(err.message));
});

router.get("/:id", auth, (req, res) => {
  findOne(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json(err.message));
});

router.post(
  "/create",
  auth,
  upload.single("trainerImage"),
  async (req, res) => {
    try {
      await authTrainer.validateAsync(req.body);
      const trainer = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        job: req.body.job,
        about: req.body.about,
        experience: req.body.experience,
        course: req.body.course,
        trainerImage: req.file.path,
      };
      console.log(req.file.path);
      const response = await create(trainer);
      res
        .status(202)
        .json({ data: response, message: "trainer added successfully !" });
    } catch (err) {
      res.status(404).json(err.message);
    }
  }
);

router.patch("/:id", auth, async (req, res) => {
  try {
    const trainer = await update({ _id: req.params.id }, req.body);
    res
      .status(202)
      .json({ data: trainer, message: "trainer updated successfully !" });
  } catch (err) {
    res.status(404).json(err.message);
  }
});

router.delete("/:id", auth, async (req, res) => {
  const trainerId = { _id: req.params.id };
  try {
    const trainer = await remove(trainerId);
    res
      .status(202)
      .json({ data: trainer, message: "trainer deleted successfully !" });
  } catch (err) {
    res.status(404).json(err.message);
  }
});

module.exports = router;
