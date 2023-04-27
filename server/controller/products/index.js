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

const searchProducts = async (req, res) => {
  if (!req.query.searchCategory) {
    // Product.find({$text: {$search: req?.query.query}}).skip(20).limit(10).exec(function(err, docs) { console.log(docs) });
    const results = await Product.find({ $text: { $search: req?.query?.query } });
    return res.status(200).json({ data: results });
  }
};

module.exports = { fetchProducts, searchProducts };
