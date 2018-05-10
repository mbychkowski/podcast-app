const db = require("../models")

module.exports = {

  //Find subscriptions by a specific user
  subscriptionsByUser: function(req,res){
    db.Subscription
      .create(req.body)
      .then(dbSubscription => {
        return db.User
          .findOneAndUpdate(
            //Match the selected id with the id of the user field to make sure the person exists
            {
            _id: req.body.user
            },
            {
              $push: {
                  subscriptions: dbSubscription.collectionName
              }
            },
            {new: true}
          )
      })
      .then(dbUser => {
        res.json(dbUser)
      })
      .catch(err =>{
        res.json(error)
      })

    // The rest needs to be filled in
  }

}
