const addUser = require("./addUser");
const loginUser = require("./loginUser");
const logoutUser = require("./logoutUser");
const getAllUsers = require("./getAllUsers");
const getCurrentUserStatus = require("./getCurrentUserStatus");

const ctrlWrapper = require("../ctrlWrapper");

module.exports = {
  addUser: ctrlWrapper(addUser),
  loginUser: ctrlWrapper(loginUser),
  getAllUsers: ctrlWrapper(getAllUsers),
  getCurrentUserStatus: ctrlWrapper(
    getCurrentUserStatus
  ),
  logoutUser: ctrlWrapper(logoutUser),
};
