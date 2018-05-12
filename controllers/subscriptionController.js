const db = require("../models")

module.exports = {

  //create a subscription
  subscriptionsByUser: function(req,res){
    db.Subscription
      .create(req.body)
      .then(dbSubscription => {
        //Update a user when they subscribe to a podcast
        // Add a subscription to a podcast
        res.json(dbUser))}
      .catch(err => res.json(err))
    }
  }
