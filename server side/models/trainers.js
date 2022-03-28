const mongoose = require("mongoose");
const trainerSchema = new mongoose.Schema({
  firstName: { type: "string" },
  lastName: { type: "string" },
  job: { type: "string" },
  about: { type: "string" },
  experience: { type: "string" },
  course: { type: "string" },
  trainerImage: { type: "string" },
});
const Trainer = mongoose.model("Trainer", trainerSchema);
module.exports = Trainer;
