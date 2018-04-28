import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import mongoose from 'mongoose';
import Router from '../../routes/api/auth-routes';
import GoogleLogin, { GoogleLogout } from '../dist/google-login'

class GoogleLoginHelper extends Component {
  // ReactDOM.render
  clientId = '558027906323-pp4gp3279cmjjulkggqn77vgklp58vhm.apps.googleusercontent.com'

  success = response => {
    console.log(response)
  }

  error = response => {
    console.error(response)
  }

  loading = () => {
    console.log('loading')
  }

  logout = () => {
    console.log('logout')
  }

render() {
  return(
    <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    className="g-signin2" data-onsuccess="onSignIn"
    />
    <nav>
            <ul>
                <li><a href="/auth/logout">Logout</a></li>
                <li><a href="/auth/login">Login</a></li>
                <li><a href="/">Homepage</a></li>
            </ul>
        </nav>
    )
  }
}

export default GoogleLoginHelper;
