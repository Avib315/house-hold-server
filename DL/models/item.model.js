const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
  displayName: { type: String, required: true },
});

const itemMoedls = mongoose.model("Item", itemSchema);

module.exports = itemMoedls;
