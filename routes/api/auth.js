const express = require("express");

const {
  users: ctrl,
} = require("../../controllers/");

const validateBody = require("../../middlewares");

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

module.exports = router;
