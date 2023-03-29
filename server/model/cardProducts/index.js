const mongoose = require("mongoose");

const cardProducts = mongoose.model("cardProducts", {
  productId: { type: String },
  size: { type: String },
  quantity: { type: Number },
});

module.exports = { cardProducts };
