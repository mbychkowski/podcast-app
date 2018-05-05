const db = require("../models")

//Export all controllers around a podcast
module.exports = {
  //find all podcasts
  findAll: function(req,res) {
    db.PodcastShow
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err))
  },
  // Find the top ten Podcasts
  topTenShows: function(req,res){
    db.PodcastShow
      .find(req.query)
      .sort({views: -1})
      .limit(10)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(dbModel))
  },
  addPodcast: function(req, res) {
    console.log(req.body);
    db.PodcastShow
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(dbModel => res.json(dbModel))
  }
}
