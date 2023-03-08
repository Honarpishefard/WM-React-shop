const { User } = require("../../model/User");

const fetchUser = async (req, res) => {
    const user = await User.find({});
    res.status(200).json({ data: user });
  };

module.exports = { fetchUser };
