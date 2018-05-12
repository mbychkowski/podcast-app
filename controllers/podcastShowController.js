const db = require("../models")

//Export all controllers around a podcast
module.exports = {
  //find all podcasts
  findAll: function(req,res) {
    db.PodcastShow
      .findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err))
  },

  // Find the top ten Podcasts
  topTenShows: function(req,res){
    db.PodcastShow
      .find({})

      //Sort the podcasts by views in descending order
      .sort({views: -1})

      // Only display the first 10 which translates to the top ten in this case
      .limit(10)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(dbModel))
  },
  // Post the podcast show to the db
  addPodcast: function(req, res) {
    db.PodcastShow
      .findOrCreate({where: {collectionId: req.body.collectionId}})
      .spread((notCreated, created) => {
        if (created){
          // if the podcast had already been added
          for (var i = 0; i < created.length; i++) {
            var currentViews = created[0].views
            var newViews = currentViews++

            //update the db with the new views count
            db.User.
              .update({
                views: newViews
              }).then(dbUser => res.json(dbUser))
              .catch(err => res.json(error))
          }
        }
        else {
          console.log(notCreated);
        }
      }
    }
}
