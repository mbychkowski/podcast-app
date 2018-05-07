const router = require("express").Router();
const podcastEpisodeController = require("../../controllers/podcastEpisodeController");

router.route("/")
  .post(podcastEpisodeController.addPodcastEpisode)

// Get the top ten episodes played
router.route("/topTen")
  .get(podcastEpisodeController.topTenEoisodes)

module.exports = router
