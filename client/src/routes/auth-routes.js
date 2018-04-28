import React from "react";
import React, { Component } from "react";
import { Router, Route, Switch, Link} from 'react-router'

const router = require("express").Router();

module.exports = router;

// Route for Home page
  export default React.createClass({
      return (
        <div>
          <ul role="nav">
            <li><Link to="/api-routes/login"></Link></li>
            <li><Link to="/SignedIn">Repos</Link></li>
          </ul>
          <ul>
            <li><a href="/auth/logout">Logout</a></li>
               <li><a href="/auth/login">Login</a></li>
               <li><a href="/">Homepage</a></li>
         </ul>
        </div>
      );
    })


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

export default from 'auth-routes';
