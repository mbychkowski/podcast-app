const router = require('express').Router();

// const userRoutes = require("./user")
const podcastShowRoutes = require("./podcastShow")
const podcastEpisodeRoutes = require("./podcastEpisode")
const userRoutes = require("./users");


// router.use("/user", userRoutes)
router.use("/podcastShow", podcastShowRoutes)
router.use("/podcastEpisode", podcastEpisodeRoutes)

// User routes
router.use("/users", userRoutes);

module.exports = router;
