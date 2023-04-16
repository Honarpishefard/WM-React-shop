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
  const { id, name, email } = req.body;
  const compareUser = await User.find({ _id: id });
  // console.log(compareUser[0].name);

  if (name) {
    if (name == compareUser[0].name) return res.status(400).json({message: 'This name is already chosen'});
    const user = await User.findOneAndUpdate(id, {name: name}, { new: true });
    return res.status(200).json({ message: 'Name changed successfully', user });
  };
  if (email) {
    if (email == compareUser[0].email) return res.status(400).json({message: 'This email is already chosen'});
    const user = await User.findOneAndUpdate(id, {email: email},  { new: true });
    return res.status(200).json({ message: 'Email changed successfully', user });
  };
};

module.exports = { fetchUser, changeUserInfo };
