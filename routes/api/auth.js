const express = require("express");

const {
  users: ctrl,
} = require("../../controllers/");

const {
  validateBody,
  auth,
} = require("../../middlewares");

const {
  addUserSchema,
  loginUserSchema,
} = require("../validation/");

const router = express.Router();

router.post(
  "/signup",
  validateBody(addUserSchema),
  ctrl.addUser
);

router.post(
  "/login",
  validateBody(loginUserSchema),
  ctrl.loginUser
);

router.post("/logout", auth, ctrl.logoutUser);

router.get(
  "/current",
  auth,
  ctrl.getCurrentUserStatus
);

module.exports = router;
