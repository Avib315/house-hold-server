const mongoose = require("mongoose");

const shoppingListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  created: { type: Date, default: Date.now },
  list: [{ _id: { type: mongoose.Schema.Types.ObjectId, ref: "User.Items.item" } }],
});


module.exports = { shoppingListSchema};
