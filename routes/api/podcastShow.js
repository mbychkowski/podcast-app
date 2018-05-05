const router = require("express").Router();
const podcastShowController = require("../../controllers/podcastShowController");

router.route("/")
  .get(podcastShowController.findAll)
  .get(podcastShowController.topTenShows)
  .post(podcastShowController.addPodcast)

module.exports = router
