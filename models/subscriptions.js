const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriptionsSchema = new Schema(

  {
  _id: Schema.Types.ObjectId,
  userID: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  collectionid: {
    type: String
  },
  artistId: {
    type: String
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
    type: Array
  },
  mostRecentRelease: {
    type: Date
  },
});

const Subscription = mongoose.model('Subscription', subscriptionsSchema);

module.exports = Subscription;
