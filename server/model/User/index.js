const mongoose = require("mongoose");

const User = mongoose.model("user", {
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  cardProducts: [
    {
      productId: { type: String },
      size: { type: String },
      quantity: { type: Number },
    },
  ],
  createdAt: { type: String, default: new Date() },
});

module.exports = { User };
