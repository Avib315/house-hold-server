const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  categoryIcon: String,
});

const categoryMoedls = mongoose.model("category", categorySchema);

module.exports = categoryMoedls;
