const { User } = require("../../model/User");
const { Product } = require("../../model/product");

const handleFetchCards = async (req, res) => {
  const { userId } = req.body;

  const findProduct = async (_id) => {
    const data = await Product.findOne({ _id }).exec();
    return data;
  };

  const user = await User.findById(userId);
  Promise.all(
    user.cardProducts.map(async (i) => {
      const data = await findProduct(i.productId);
      const info = { size: i.size, quantity: i.quantity };

      return [data, info];
    })
  )
    .then((products) => {
      res.status(200).json({ data: products });
    })
    .catch((err) => {
      res.status(404).json({ message: "something went wrong" });
    });
};

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

const handleRemoveFromCard = async (req, res) => {
  const { userId, productId, size, quantity } = req.body;

  await User.findByIdAndUpdate(userId, {
    $pull: { cardProducts: { productId, size, quantity } },
  })
    .then(() => {
      res.status(200).json({ message: "removed from card succesfuly" });
    })
    .catch((ex) => res.status(400).json({ message: ex }));
};

module.exports = { handleAddToCard, handleFetchCards, handleRemoveFromCard };
