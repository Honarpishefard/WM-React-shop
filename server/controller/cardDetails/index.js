const { User } = require("../../model/User");

const handleAddToCard = async (req, res) => {
  const { productId, size, quantity, userId } = req.body;
  console.log(size);
  console.log(quantity);
  console.log(userId);
  console.log(productId);

  await User.findByIdAndUpdate(
    userId,
    { cardProducts: {productId, size, quantity} },
    { new: true }
  );
  res.status(200).json({ message: "added to card succesfuly" });

  //   res.status(200).json({ message: "ok" });
};

module.exports = { handleAddToCard };
