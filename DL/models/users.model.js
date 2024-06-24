const mongoose = require("mongoose");
const { itemSchema } = require("./item.model");
const { shoppingListSchema } = require("./shoppingList.schema");
const { recipesSchema } = require("./recipes.model");
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
  avatar:String,
  items: [itemSchema],
  lists: [shoppingListSchema],
  shoppingList: [{ type: mongoose.Schema.Types.ObjectId, ref: "User.Lists.list" }],
  recipes: [recipesSchema],
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});
const userModels = mongoose.model("User", userSchema);
module.exports = userModels;
