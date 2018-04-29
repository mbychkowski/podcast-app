import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import mongoose from 'mongoose';
import Router from '../../routes/api/auth-routes';
import GoogleLogin, { GoogleLogout } from '../dist/google-login'

class GoogleLoginHelper extends Component {
  // ReactDOM.render
  clientId = '558027906323-ht29bsa3a662t327bd7753opuu3v9fvr.apps.googleusercontent.com	'

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
    clientId="558027906323-30k4oqhfe0m38iupmhef8p1hid76v6i5.apps.googleusercontent.com"
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
