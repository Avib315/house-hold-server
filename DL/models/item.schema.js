const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Categories" },
  displayName: { type: String, required: true },
});
module.exports = itemSchema;
