const { Product } = require("../../model/product");

const fetchProducts = async (req, res) => {
  if (req.query.category) {
    if (req.query.productId) {
      const product = await Product.find({
        "category.0": req.query.category,
        _id: req.query.productId,
      });
      return res.status(200).json({ data: product });
    }
    const product = await Product.find({ "category.0": req.query.category });
    return res.status(200).json({ data: product });
  }
  const products = await Product.find({});
  res.status(200).json({ data: products });
};

module.exports = { fetchProducts };
