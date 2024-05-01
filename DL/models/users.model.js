const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isActive: { default: true },
  email: {
    uniqe: true,
    required: true,
    type: String,
  },
  password: {
    required: true,
  },
  items: [],
});

const userMoedls = mongoose.model("User", userSchema);

module.exports = userMoedls;
