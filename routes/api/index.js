const router = require('express').Router();
const userRoutes = require("./users");
const podcastShowRoutes = require("./podcastShow");

// router.use("/user", userRoutes)
router.use("/podcastShow", podcastShowRoutes)

// User routes
router.use("/users", userRoutes);

module.exports = router;
