const { User } = require("../../model/User");

const fetchUser = async (req, res) => {
  const { email, id } = req.body;
  if (email) {
    const user = await User.find({ email });
    res.status(200).json({ user });
  }
  if (id) {
    const user = await User.find({ _id: id });
    res.status(200).json({ user });
  }
};

module.exports = { fetchUser };
