const { Schema, model } = require("mongoose");

//in this case, getting 'admin' role is possible only manually by mongoDB admin
const usersRoles = ["customer", "admin"];

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
    role: {
      type: String,
      enum: usersRoles,
      default: usersRoles[0], //to get admin role you schould edit this field manually
    },
    subscription: {
      type: String,
      enum: userSubscriptionTypes,
      default: userSubscriptionTypes[0],
    },
    token: String,
  },
  { timestamps: true }
);

const User = model("user", userSchema);

module.exports = { User, userSubscriptionTypes };
