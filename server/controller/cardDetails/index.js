const { User } = require("../../model/User");

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

};

module.exports = { handleAddToCard, handleFetchCards };
