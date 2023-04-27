const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: { type: String, require: true },
  desc: { type: String, require: true },
  price: { type: String, require: true },
  category: { type: Array },
  colors: { type: Array },
  picture: { type: String, require: true },
});

const Product = mongoose.model("product", ProductSchema);
ProductSchema.index({ title: "text", category: "text" });

module.exports = { Product };
