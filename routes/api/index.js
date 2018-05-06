const router = require('express').Router();
// const userRoutes = require("./user")
const podcastShowRoutes = require("./podcastShow")

// router.use("/user", userRoutes)
router.use("/podcastShow", podcastShowRoutes)


module.exports = router;
