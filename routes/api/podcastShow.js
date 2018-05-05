const router = require("express").Router();
const podcastShowController = require("../../controllers/podcastShowController");

router.route("/")
  .get(podcastShowController.findAll)
  .post(podcastShowController.addPodcast)

//Get the top 10 shows
router.route("/topTen")
  .get(podcastShowController.topTenShows)

module.exports = router
