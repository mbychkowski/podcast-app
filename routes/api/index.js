const router = require('express').Router();

// const userRoutes = require("./user")
const podcastShowRoutes = require("./podcastShow")
const podcastEpisodeRoutes = require("./podcastEpisode")
const userRoutes = require("./users");

<<<<<<< HEAD

=======
>>>>>>> parent of 88102838... Merge pull request #50 from mbychkowski/user-db
// router.use("/user", userRoutes)
router.use("/podcastShow", podcastShowRoutes)
router.use("/podcastEpisode", podcastEpisodeRoutes)

// User routes
router.use("/users", userRoutes);

module.exports = router;
