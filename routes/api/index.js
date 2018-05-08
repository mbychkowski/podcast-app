const router = require('express').Router();
const userRoutes = require("./users");
const podcastShowRoutes = require("./podcastShow");

router.use("/podcastShow", podcastShowRoutes)

router.use("/users", userRoutes);

module.exports = router;
