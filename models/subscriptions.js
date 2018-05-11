// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const Subscription = sequelize.define( 'subscription',
  {
  collectionid: {
    type: Sequelize.STRING
  },
  artistId: {
    type: Sequelize.STRING
  },
  collectionName: {
    type: Sequelize.STRING
  },
  artistName: {
    type: Sequelize.STRING
  },
  artworkUrl100: {
    type: Sequelize.STRING
  },
  feedUrl: {
    type: Sequelize.ARRAY
  },
  mostRecentRelease: {
    type: Sequelize.DATE
  },
})


module.exports = Subscription;
