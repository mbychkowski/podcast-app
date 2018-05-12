const db = require("../models")

//Export all of the controllers around a user
module.exports = {
  //Get all user
  findAll: (req, res) => {
    db.User
      .findAll({})
      .then(dbUser => res.json(dbUser))
      .catch(err => res.json(error))
  },
  //Create a user
  createUser: (req, res) => {
    db.User
      .create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.json(err));
  },

  //Update user
  // updateUser: function(req, res) {
  //   db.User
  //     .findOneAndUpdate({_id: req.params.id}, req.body)
  //     .then(dbUser => res.json(dbUser))
  //     .catch(err => res.json(error))
  // },

  //Find a user by a specific user id
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.json(err))
  },
  //remove a user
  removeUser: function(req, res) {
    db.User
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.json(err))
  },
  // Find all subscriptions for a specific user
  findSubscriptions: function(req,res){
    db.User
    .findOne({
      where:{
				id: req.body.user
      },
      include: [{model: db.Subscription}]
    })
    .then(dbUser => {
      res.json(dbUser)
    })
    .catch(error => {
      res.json(error)
    })
  }

}
