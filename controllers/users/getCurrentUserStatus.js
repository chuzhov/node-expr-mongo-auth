const { User } = require("../../models/");

const getCurrentUserStatus = async (req, res) => {
  const { _id } = req.user;
  const { email, subscription } =
    await User.findById(_id);
  res.json({ email, subscription });
};

module.exports = getCurrentUserStatus;
