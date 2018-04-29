import React from 'react';
import GoogleLoginHelper from 'react-google-login';
// import App from '../../App.js';
import SignIn from './SignIn';
import './Navbar.css';

// Create a component that will be the navbar

const Navbar = props => {
  return (
  <div className="navbar w-full">

    {/* Sign-in with Google */}
    <div className="g-signin2"
         data-onsuccess="onSignIn">
          <GoogleLoginHelper />
    </div>
  </div>

);
}


export default Navbar;
