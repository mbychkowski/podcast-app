// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const PodcastEpisode = sequelize.define( 'podcastEpisode',
  {
  showTitle: {
    type: Sequelize.STRING,
  },
  collectionid: {
    type: Sequelize.STRING
  },
  audioUrl: {
    type: Sequelize.STRING
  },
  showHost: {
    type: Sequelize.STRING
  },
  showId: {
    type: Sequelize.STRING
  },
  genre: {
    type: Sequelize.ARRAY
  },
  episodeTitle: {
    type: Sequelize.STRING
  },
  episodeThumbnail: {
    type: Sequelize.STRING
  },
  releaseDate: {
    type: Sequelize.DATE
  },
  views: {
    type: Sequelize.INTEGER ,
    defaultValue: 1
  }
});

// const PodcastEpisode = mongoose.model('PodcastEpisode', podcastEpisodeSchema);

module.exports = PodcastEpisode;
