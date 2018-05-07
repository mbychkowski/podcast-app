const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const podcastEpisodeSchema = new Schema({
  show: {
    type: String,
    required: true
  },
  host: {
    type: String,
    required: true
  },
  genre: {
    type: String
  },
  synopsis: {
    type: String
  },
  thumbnail: {
    type: String
  },
  lastRealease: {
    type: Date
  },
  feedUrl: {
    type: String
  },
  views: {
    type: Number
  }
});

const PodcastEpisode = mongoose.model('PodcastEpisode', podcastEpisodeSchema);

module.exports = PodcastEpisode;
