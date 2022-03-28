const express = require("express");
const auth = require("../middleAuth/users");
const router = express.Router();
const { create, find, findOne } = require("../controller/contact");

//get all :

router.get("/", async (req, res, next) => {
  try {
    const contact = await find({}).populate("auther", {
      firstName: 1,
      lastName: 1,
      email: 1,
    });
    res.status(202).json(contact);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

//get by id:

router.get("/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const contact = await findOne(_id).populate("auther", {
      firstName: 1,
      lastName: 1,
      email: 1,
    });
    res.status(202).json(contact);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

//post comment:

router.post("/", auth, async (req, res) => {
  try {
    const contact = req.body;
    contact.auther = req.user._id;
    console.log(req.headers.token);
    const response = await create(contact);
    res.status(202).json("your message sent successfully !");
  } catch (err) {
    res.status(404).json(err.message);
  }
});

//update comment:

// router.patch("/:id", auth, async (req, res) => {
//   const _id = req.params.id;
//   const body = req.body;
//   try {
//     newComment = await update(_id, body);
//     res
//       .status(202)
//       .json({ data: newComment, message: "updated successfully!" });
//   } catch (err) {
//     res.status(202).json(err.message);
//   }
// });

//delete comment:

// router.delete("/:id", auth, async (req, res) => {
//   const _id = req.params.id;
//   try {
//     await remove(_id);
//     res.status(202).json("comment deleted successfully");
//   } catch (err) {
//     res.status(404).json(err.message);
//   }
// });
module.exports = router;
