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
  const { id } = req.body;
  // User.cardProducts.findByIdAndDelete({ productId: id });
  // User.cardProducts.findByIdAndRemove({ productId: id });

  // await User.findByIdAndUpdate(
  //   { _id: "640f51e2826fc2c0f0db5b63" },
  //   { $unset: { cardProducts: { productId: id } } },
  // );

};

module.exports = { handleAddToCard, handleFetchCards, handleRemoveFromCard };
