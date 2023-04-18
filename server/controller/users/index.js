const bcrypt = require("bcrypt");
const sharp = require("sharp");
const { User } = require("../../model/User");
const { checkImageFormat } = require("../../utils/checkImageFormat");
const { getPath } = require("../../utils/getPath");

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
  const { id, name, email, currentPassword, newPassword } = req.body;
  const compareUser = await User.find({ _id: id });
  const picture = req.files.picture;

  if (name) {
    if (name == compareUser[0].name) return res.status(400).json({message: "This name is already chosen"});
    const user = await User.findOneAndUpdate(id, {name: name}, { new: true });
    return res.status(200).json({ message: "Name changed successfully", user });
  };
  if (email) {
    if (email == compareUser[0].email) return res.status(400).json({message: "This email is already chosen"});
    const user = await User.findOneAndUpdate(id, {email: email},  { new: true });
    return res.status(200).json({ message: "Email changed successfully", user });
  };
  if (currentPassword && newPassword) {
    bcrypt.compare(currentPassword, compareUser[0].password, function(err, result) {
      if (!result) return res.status(400).json({ message: "Current password is incorrect" });
      bcrypt.compare(newPassword, compareUser[0].password, async function (err, result) {
        if (result) return res.status(400).json({ message: "Choose a password you haven't used before" });
        const hashedPassword = await bcrypt.hash(newPassword, 8);
        await User.findOneAndUpdate(id, { password: hashedPassword },  { new: true });
        return res.status(200).json({ message: "Your password was changed successfully" });
      });
    });
  };
  if (picture) {
    if (checkImageFormat(picture)) {
      await sharp(picture.data)
        .jpeg({ quality: 60 })
        .toFile(getPath(`public/uploads/${picture.md5 + picture.name}.jpg`))
        .catch((err) => console.log(err));
    } else {
      return res.status(400).json({ message: "file format not supported" });
    };
    await User.findOneAndUpdate(id, {profilePicture: picture ? picture.md5 + picture.name + ".jpg" : ""},  { new: true });
    return res.status(200).json({ message: "Your profile picture was updated successfully" });
  };
};

module.exports = { fetchUser, changeUserInfo };
