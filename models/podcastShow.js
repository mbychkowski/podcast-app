// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const PodcastShow = sequelize.define( 'podcastShow', {
  artistId: {
    type: Sequelize.STRING
  },
  collectionId: {
    type: Sequelize.STRING
  },
  artistName: {
    type: Sequelize.STRING
  },
  collectionName: {
    type: Sequelize.STRING
  },
  feedUrl: {
    type: Sequelize.STRING
  },
  artworkUrl30: {
    type: Sequelize.STRING
  },
  artworkUrl60: {
    type: Sequelize.STRING
  },
  artworkUrl100: {
    type: Sequelize.STRING
  },
  mostRecentRelease: {
    type: Sequelize.DATE 
  },
  genre: {
    type: Sequelize.ARRAY
  },
  views: {
    type: Sequelize.INTEGER
    defaultValue: 1
  }
})


module.exports = PodcastShow;
