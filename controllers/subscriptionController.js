const db = require("../models")

module.exports = {

  //create a subscription
  subscriptionsByUser: function(req,res){
    db.Subscription
      .create(req.body)
      .then(dbModel =>
        //Go and find the user who posted this and update the user
        db.User
          .findOne(
            //Match to the id of the user who is logged in
            {_id: dbModel.userId[0]}

          )
          .then(dbUser =>
            db.User
              .update(
                { _id: dbUser.id },
                { $push: { subscriptions: dbModel }}
              )
            .then(dbResult => res.json(dbResult))
            .catch(err => res.json(err))
      )
      .catch(err => res.json(err))
    )}
  }
