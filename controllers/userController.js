const db = require('../models');


//Export all of the controllers around a user
module.exports = {
    //Get all user
    findAll:  (req, res) => {
        db.User
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(error))
    },
    //Create a user
    createUser: (req, res) => {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    },  
    //Update user
    updateUser: (req, res) => {
        db.User
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(error))
    },
    //Find a user by a specific user id
    findById: (req, res) => {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(dbModel => res.json(err))
    },
    //remove a user
    removeUser: (req, res) => {
        db.User
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    }
}