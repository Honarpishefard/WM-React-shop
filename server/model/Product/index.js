const mongoose = require("mongoose");

const Product = mongoose.model("product", {
  title: { type: String, require: true },
  desc: { type: String, require: true },
  price: { type: String, require: true },
  color: { type: String },
  picture: { type: String, require: true },
});

module.exports = { Product };
