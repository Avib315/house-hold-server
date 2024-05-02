const mongoose = require("mongoose");
const itemSchema = require("./item.schema");



const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isActive: { type: Boolean, default: true },
  email: {
    unique: true,
    required: true,
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  items: [itemSchema],
});

const userModels = mongoose.model("User", userSchema);

module.exports = userModels;
