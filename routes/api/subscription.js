const router = require("express").Router();
const subscriptionController = require("../../controllers/subscriptionController.js");

//Post a subscription to the db
router.route("/")
  .post(subscriptionController.subscriptionsByUser)

module.exports = router
