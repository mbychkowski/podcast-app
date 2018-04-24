import React from 'react';
// import GoogleLogin from 'react-google-login';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../../App.js';
import SignIn from './SignIn';
import './Navbar.css';

const app = document.getElementById('app');


// Create a component that will be the navbar

const Navbar = props => {
  return (
  <div className="navbar w-full">
      <button
        name="signUp"
        id="signUp"
        className="btn btn-primary"
        href="/signup">Sign-up
      </button>
  </div>
);
}


export default Navbar;
