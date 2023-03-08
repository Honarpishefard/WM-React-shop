const { Product } = require("../../model/product");

const fetchProducts = async (req, res) => {
  if (req.query.category) {
    const products = await Product.find({ category: "men" });
    return res.status(200).json({ data: products });
  }
//   const products = await Product.find({});
//   res.status(200).json({ data: products });
};

module.exports = { fetchProducts };
