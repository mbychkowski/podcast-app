const router = require('express').Router();
// const userRoutes = require("./user")
const podcastShowRoutes = require("./podcastShow")
const podcastEpisodeRoutes = require("./podcastEpisode")

// router.use("/user", userRoutes)
router.use("/podcastShow", podcastShowRoutes)
router.use("/podcastEpisode", podcastEpisodeRoutes)


module.exports = router;
