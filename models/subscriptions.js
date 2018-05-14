const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriptionsSchema = new Schema(

  {
  userId: [{
    type: String,
  }],
  collectionId: {
    type: Number
  },
  artistId: {
    type: Number
  },
  collectionName: {
      type: String
  },
  artistName: {
    type: String
  },
  artworkUrl600: {
    type: String
  },
  feedUrl: {
    type: String
  },
  mostRecentRelease: {
    type: Date
  },
  genres: {
    type: Array
  }
})
const Subscription = mongoose.model('Subscription', subscriptionsSchema);

module.exports = Subscription;
