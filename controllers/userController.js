const db = require('../models');


//Export all of the controllers around a user
module.exports = {
    //Create a user
    createUser = (req, res) => {
        db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err))
    },
    findById = (req, res) => {
        db.User
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(dbModel => res.json(err))
    },
    remove = (req, res) => {
        db.User
        .findById({_id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err))
    }
}