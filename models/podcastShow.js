const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PodcastShowSchema = new Schema({
  artistId: {
    type: Number
  },
  collectionID: {
    type: Number
  },
  artistName: {
    type: String
  },
  collectionName: {
    type: String
  },
  feedUrl: {
    type: String
  },
  artworkUrl30: {
    type: String
  },
  artworkUrl60: {
    type: String
  },
  artworkUrl100: {
    type: String
  }
  mostRecentRelease: {
    type: String
  },
  genre: {
    type: Array
  }
})

const PodcastShow = mongoose.model("PodcastShow", PodcastShowSchema )

module.exports = PodcastShow;
