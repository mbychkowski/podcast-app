const router = require('express').Router();

// const userRoutes = require("./user")
const podcastShowRoutes = require("./podcastShow")
const podcastEpisodeRoutes = require("./podcastEpisode")
const userRoutes = require("./users");
const subscriptionRoutes = require("./subscription.js")


// router.use("/user", userRoutes)
router.use("/podcastShow", podcastShowRoutes)
router.use("/podcastEpisode", podcastEpisodeRoutes)

// User routes
router.use("/users", userRoutes);

//Subscriptio routes
router.use("/subscriptions", subscriptionRoutes)

module.exports = router;
