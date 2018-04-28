const router = require("express").Router();

const router = require('express').Router();
// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
});

// auth with google+
router.get('/google', (req, res) => {
    // handle with passport
    res.send('logging in with Google');
});

module.exports = router;



//import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// const router = require("express").Router();
// const podcastsController = require("../../controllers/podcastsController");
//
// // Matches with "/api/podcasts"
// router.route("/login")
//   .get(podcastsController.findAll)
//   .post(podcastsController.create);
//
// // Matches with "/api/podcasts/:id"
// router
//   .route("/logout")
//   .get(podcastsController.findById)
//   .put(podcastsController.update)
//   .delete(podcastsController.remove);
//
//   // Matches with "/api/podcasts"
//   router.route("/google")
//     .get(podcastsController.findAll)
//     .post(podcastsController.create);
//
// module.exports = router;
