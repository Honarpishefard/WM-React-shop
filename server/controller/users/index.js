const { User } = require("../../model/User");

const fetchUser = async (req, res) => {
  const { email } = req.body;
  const user = await User.find({ email });
  res.status(200).json({ user });
};

module.exports = { fetchUser };
