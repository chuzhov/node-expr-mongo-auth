const addUser = require("./addUser");
const loginUser = require("./loginUser");
const logoutUser = require("./logoutUser");
const getCurrentUserStatus = require("./getCurrentUserStatus");

const ctrlWrapper = require("../ctrlWrapper");

module.exports = {
  addUser: ctrlWrapper(addUser),
  loginUser: ctrlWrapper(loginUser),
  getCurrentUserStatus: ctrlWrapper(
    getCurrentUserStatus
  ),
  logoutUser: ctrlWrapper(logoutUser),
};
