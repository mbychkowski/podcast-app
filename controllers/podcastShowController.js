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

      //Sort the podcasts by views in descending order
      .sort({views: -1})

      // Only display the first 10 which translates to the top ten in this case
      .limit(10)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(dbModel))
  },
  // Post the podcast show to the db
  addPodcast: function(req, res) {
    //find if the entry already exists in the db
    var query = db.PodcastShow.where({collectionId: req.body.collectionId})
    query.findOne(function (err, results){

      //If the query does not exist in the db
      if (err) return handleError(err);

      //If the queries do exist in the db
      if (results) {
        db.PodcastShow.findOneAndUpdate(

          //Match the selected Podcast with the collectionId field
          {collectionId: req.body.collectionId},

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
        db.PodcastShow
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(dbModel => res.json(dbModel))
      }
    })
  },

  // Add a subscription to a podcast
  addSubscription: function(req,res){
    db.PodcastShow
      .findOneAndUpdate(
        // Where the collectionId matches the submitted podcast
        {collectionId: req.body.collectionId},
        // Pusht the user id of the person who has subscribed to the podcast
        { $push: {subscriptions: req.body._id}},
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
      })
  }
}
