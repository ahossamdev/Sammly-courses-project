const express = require("express");
const auth = require("../middleAuth/users");
const router = express.Router();
const { createComment, createRate } = require("../controller/evaluate");


router.patch("/comment/:id", auth, async (req, res) => {
  try {
    const courseId = req.params.id;
    const comment = req.body;
    comment.auther = req.user.email;
    console.log(comment);
    const response = await createComment(courseId, comment);
    res.status(202).json(response);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

router.patch("/rate/:id", auth, async (req, res) => {
  try {
    const courseId = req.params.id;
    const rate = req.body.rate;
    // rate.auther = req.user._id;
    console.log(rate);
    const response = await createRate(courseId, rate);
    const totalRate = (
      response.rates.reduce((a, b) => a + b, 0) / response.rates.length
    ).toFixed(1);
    res.status(202).json(totalRate);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

module.exports = router;
