const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const userRouter = require("./routers/users");
const trainerRouter = require("./routers/trainers");
const trainerFormRouter = require("./routers/trainerForm");
const coursesRouter = require("./routers/courses");
const contactRouter = require("./routers/contact");
const adminRouter = require("./routers/adminPanel");
const evaluateRouter = require("./routers/evaluate");

require("dotenv").config();
app.use(express.json());
const uri = process.env.URI;
mongoose.connect(uri);
const corsOption = {
  origin: process.env.CORS_URL,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOption));
app.use("/uploads", express.static("uploads"));
app.use("/users", userRouter);
app.use("/trainers", trainerRouter);
app.use("/trainerform", trainerFormRouter);
app.use("/courses", cors(corsOption), coursesRouter);
app.use("/contact", contactRouter);
app.use("/admin", adminRouter);
app.use("/evaluate", evaluateRouter);

app.use((err, req, res, next) => {
  res.status(500).json(err.message);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listened on ${port}`);
});
