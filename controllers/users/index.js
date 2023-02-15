const addUser = require("./addUser");
const loginUser = require("./loginUser");

const ctrlWrapper = require("../ctrlWrapper");

module.exports = {
  addUser: ctrlWrapper(addUser),
  loginUser: ctrlWrapper(loginUser),
};
