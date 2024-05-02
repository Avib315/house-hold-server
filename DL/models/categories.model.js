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

const categoryModels = mongoose.model("Categories", categorySchema);

module.exports = categoryModels;
