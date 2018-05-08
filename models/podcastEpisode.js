const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const podcastEpisodeSchema = new Schema(
  {
  showTitle: {
    type: String,
  },
  collectionid: {
    type: String
  },
  audioUrl: {
    type: String
  },
  showHost: {
    type: String
  },
  showId: {
    type: String
  },
  genre: {
    type: Array
  },
  episodeTitle: {
    type: String
  },
  episodeThumbnail: {
    type: String
  },
  releaseDate: {
    type: Date
  },
  views: {
    type: Number,
    default: 1
  }
});

const PodcastEpisode = mongoose.model('PodcastEpisode', podcastEpisodeSchema);

module.exports = PodcastEpisode;
