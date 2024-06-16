const mongoose = require("mongoose");

const recipesSchema = new mongoose.Schema({
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    displayName: { type: String, required: true },
    cookingTime: { type: String, required: true },
    description: { type: String, required: true },
    created: { type: Date, default: Date.now }
  });

module.exports = { recipesSchema }