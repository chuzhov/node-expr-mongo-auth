const express = require("express");

const {
  admin: ctrl,
} = require("../../controllers/index");
const {
  updateSubscriptionSchema,
} = require("../validation");
const {
  validateBody,
  adminAuth,
} = require("../../middlewares");

const router = express.Router();

router.patch(
  "/:userId/subscription",
  adminAuth,
  validateBody(updateSubscriptionSchema),
  ctrl.updUserSubscription
);

// router.delete(
//   "/:contactId",
//   auth,
//   ctrl.removeContact
// );

module.exports = router;
