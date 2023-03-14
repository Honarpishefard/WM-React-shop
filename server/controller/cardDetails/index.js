const { User } = require("../../model/User");
const { Product } = require("../../model/product");

const handleAddToCard = async (req, res) => {
  const { productId, size, quantity, userId } = req.body;

  await User.findByIdAndUpdate(
    userId,
    { $addToSet: { cardProducts: { productId, size, quantity } } },
    { new: true }
  )
    .then(() => {
      res.status(200).json({ message: "added to card succesfuly" });
    })
    .catch((ex) => res.status(400).json({ message: ex }));
};

const handleFetchCards = async (req, res) => {
  const { userId } = req.body;

  const user = await User.findById(userId);
  Promise.all(
    user.cardProducts.map((i) => {
      return Product.findOne({ _id: i.productId }).exec();
    })
  )
    .then((products) => {
      res.status(200).json({ data: products });
    })
    .catch((err) => {
      res.status(404).json({ message: "something went wrong" });
    });
};

module.exports = { handleAddToCard, handleFetchCards };
