const db = require("../models")

module.exports = {

  //create a subscription
  subscriptionsByUser: function(req,res){
    db.Subscription
      .create(req.body)
      .then(dbModel =>
        //Go and find the user who posted this and update the user
        db.User
          .findOneAndUpdate(
            //Match to the id of the user who is logged in
            {_id: dbModel.collectionId},
            // Push the subscription to the user's subscription array
            { $push: {subscriptions: dbModel}},
            // Do not allow new entries if it doesnt exist
            {
              upsert: false,
              new: false
            },
            // Callback
            function(error, res){
              if (error){
                console.log(error)
              } else {
                console.log(res)
              }
            }
          )
      )
    }
  }
