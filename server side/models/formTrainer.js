const mongoose = require("mongoose");
const trainerFormSchema = new mongoose.Schema(
  {
    firstName: { type: "string" },
    lastName: { type: "string" },
    email: { type: "string" },
    experience: { type: "string" },
    about: { type: "string" },
    job: { type: "string" },
  },
  { timestamps: true }
);
const Form = mongoose.model("Form", trainerFormSchema);
module.exports = Form;
