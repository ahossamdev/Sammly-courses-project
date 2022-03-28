const mongoose = require("mongoose");

const UploadedFile = new mongoose.Schema({
  path: String,
  type: String,
  size: Number,
  folder: String,
  filename: String,
});

const User = mongoose.model("User", {
  email: { type: String, required: true },
  encryptedPassword: { type: String, required: true },
  uploadedFile: UploadedFile,
});
