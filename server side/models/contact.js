const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema(
  {
    firstName: { type: "string" },
    lastName: { type: "string" },
    email: { type: "string" },
    message: { type: "string" },
    auther: {
      type: mongoose.SchemaTypes.ObjectID,
      ref: "User",
    },
  },
  { timestamps: true }
);
const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
