const { User } = require("../../model/User");

const fetchUser = async (req, res) => {
  const { email, id } = req.body;
  if (email) {
    const user = await User.find({ email });
    res.status(200).json({ user });
  };
  if (id) {
    const user = await User.find({ _id: id });
    res.status(200).json({ user });
  };
};

const changeUserInfo = async (req, res) => {
  console.log(req.body);
  const { id, name, email } = req.body;
  if (name) {
    const user = await User.findOneAndUpdate(id, {name: name}, { new: true });
    return res.status(200).json({ user });
  };
  if (email) {
    const user = await User.findOneAndUpdate(id, {email: email},  { new: true });
    return res.status(200).json({ user });
  };
};

module.exports = { fetchUser, changeUserInfo };
