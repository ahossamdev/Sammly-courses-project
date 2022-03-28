const express = require("express");
const { authSchema } = require("../validations/users");
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

const router = express.Router();
const {
  register,
  find,
  findOne,
  update,
  remove,
  googleLogin,
  login,
} = require("../controller/users");

// get route :

router.get("/", (req, res, next) => {
  find({}, { username: 1, firstName: 1, lastName: 1, email: 1 })
    .then((data) => res.json(data))
    .catch((err) => next(err));
});
router.get("/:id", (req, res, next) => {
  findOne(req.params.id, {
    username: 1,
    firstName: 1,
    lastName: 1,
    email: 1,
    age: 1,
    about: 1,
    phoneNumber: 1,
    userImage:1
  })
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

// register route :

router.post("/register", async (req, res, next) => {
  try {
    await authSchema.validateAsync(req.body);
    const user = await register(req.body);
    console.log(user);
    res.status(202).json({
      data: user,
      message: user.errMessage || "registered successfully !",
    });
  } catch (err) {
    res.status(404).send(err);
  }
});

// login route :

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const Token = await login({ email, password });
    res.json({
      Token,
    });
  } catch (err) {
    res.status(404).send(err.message);
  }
});

// Google login route :

router.post("/", async (req, res) => {
  const { token } = req.body;
  const userInfo = await googleLogin(token);
  console.log(userInfo);
  const gUser = {
    email: userInfo.email,
    firstName: userInfo.name,
    lastName: userInfo.name,
    username: `Go${userInfo.name}`,
    password: userInfo,
  };
  res.status(202).json(userInfo.name, userInfo.email);
});

// update user:

router.patch("/:id", upload.single("userImage"), async (req, res) => {
  try {
    const body = req.body;
    body.userImage = req.file.path;
    const user = await update({ _id: req.params.id }, body);
    res.status(202).json({ data: user, message: " updated successfully !" });
  } catch (err) {
    res.status(404).json(err.message);
  }
});

// delete route ;

router.delete("/:id", async (req, res, next) => {
  const userId = { _id: req.params.id };
  try {
    const user = await remove(userId);
    res.status(202).json({ message: `${user.email} deleted successfully !` });
  } catch (err) {
    res.status(404).json(err.message);
  }
});

module.exports = router;
