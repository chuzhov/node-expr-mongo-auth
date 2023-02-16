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
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    subscription: {
      type: String,
      enum: userSubscriptionTypes,
      default: "starter",
    },
    token: String,
  },
  { timestamps: true }
);

const User = model("user", userSchema);

module.exports = { User, userSubscriptionTypes };
