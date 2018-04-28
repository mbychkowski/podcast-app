const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const podcastSchema = new Schema({
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
    type: Date
  }
});

const Podcast = mongoose.model('Podcast', podcastSchema);

module.exports = Podcast;
