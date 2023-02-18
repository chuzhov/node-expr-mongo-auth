const updUserSubscription = require("./updSubscription");

const ctrlWrapper = require("../ctrlWrapper");

module.exports = {
  updUserSubscription: ctrlWrapper(
    updUserSubscription
  ),
};
