const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const podcastEpisodeSchema = new Schema({
  showTitle: {
    type: String,
  },
  showHost: {
    type: String,
  },
  genre: {
    type: Array
  },
  episodeTitle: {
    type: String
  },
  episodeSubTitle: {
    type: String
  },
  episodeDuration: {
    type: String
  },
  episodeThumbnail: {
    type: String
  },
  releaseDate: {
    type: Date
  },
  views: {
    type: Number
  }
});

const PodcastEpisode = mongoose.model('PodcastEpisode', podcastEpisodeSchema);

module.exports = PodcastEpisode;
