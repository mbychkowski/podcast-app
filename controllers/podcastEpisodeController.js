const db = require("../models")

module.exports = {
  // Find the top ten Podcasts
  topTenEoisodes: function(req,res){
    db.PodcastEpisode
      .find(req.query)

      //Sort the podcasts by views in descending order
      .sort({views: -1})

      // Only display the first 10 which translates to the top ten in this case
      .limit(10)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(dbModel))
  },

  //Add a podcast episode to the db
  addPodcastEpisode: function(req, res) {
    //find if the entry already exists in the db
    var query = db.PodcastEpisode.where({collectionid: req.body.collectionid})
    query.findOne(function (err, results){

      //If the query does not exist in the db
      if (err) return handleError(err);

      //If the queries do exist in the db
      if (results) {
        db.PodcastEpisode.findOneAndUpdate(

          //Match the selected Podcast with the collectionId field
          {collectionid: req.body.collectionid},

          // Increase the views by 1
          { $inc: {views: 1} },

          // Allow new entries if it doesnt exist
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
        db.PodcastEpisode
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(dbModel => res.json(dbModel))
      }
    })

  }
}
