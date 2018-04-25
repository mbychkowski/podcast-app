import React from 'react';
import GoogleLoginHelper from 'react-google-login';
// import GoogleLoginHelper from "./components/GoogleLoginHelper";


import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../../App.js';
import SignIn from './SignIn';
import './Navbar.css';

const app = document.getElementById('app');


// Create a component that will be the navbar

const Navbar = props => {
  return (
  <div className="navbar w-full">
      {/* <button
        name="signUp"
        id="signUp"
        className="btn btn-primary"
        href="/signup">Sign-up
      </button> */}

    {/* Sign-in with Google */}
    <div className="g-signin2" data-onsuccess="onSignIn">
      <GoogleLoginHelper /> </div>


  </div>
);
}


export default Navbar;
