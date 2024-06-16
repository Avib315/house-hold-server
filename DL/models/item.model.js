const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Categories" },
  displayName: { type: String, required: true }
});
const itemModels = mongoose.model("Item", itemSchema);
module.exports = { itemSchema, itemModels };
