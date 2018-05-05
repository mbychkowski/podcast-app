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
    //find if the entry already exists in the db
    var query = db.PodcastShow.where({collectionId: req.body.collectionId})
    query.findOne(function (err, results){
      //If the query does not exist in the db
      if (err) return handleError(err);
      //if the query does exist in the
      if (results) {
        db.PodcastShow.findOneAndUpdate(
        {collectionId: req.body.collectionId},
        { $inc: {views: 1} },
        {
          upsert: true,
          new: true
        },
        function(error, res){
          if (error){
            console.log(error)
          } else {
            console.log(res)
          }
        }) // Closes the findOneAndUpdate response
      } else {
        db.PodcastShow
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(dbModel => res.json(dbModel))
      }
    })

  }
}
