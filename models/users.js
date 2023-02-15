const { Schema, model } = require("mongoose");

const userSubscriptionTypes = [
  "starter",
  "pro",
  "business",
];

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: userSubscriptionTypes,
      default: "starter",
    },
    token: String,
  },
  { timestamp: true }
);

const User = model("user", userSchema);

module.exports = { User, userSubscriptionTypes };
