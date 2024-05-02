const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  name: { type: String, required: true },
  created: { type: Date, default: Date.now },
  name: { type: String, required: true },
  list: [],
});

const listModels = mongoose.model("List", listSchema);

module.exports = listModels;
