const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriptionsSchema = new Schema(

  {
  userId: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  userEmail: {
    type: String
  },
  collectionid: {
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
  artworkUrl100: {
    type: String
  },
  feedUrl: {
    type: String
  },
  mostRecentRelease: {
    type: Date
  },
});

const Subscription = mongoose.model('Subscription', subscriptionsSchema);

module.exports = Subscription;
