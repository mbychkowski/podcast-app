import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

class GoogleLoginHelper extends Component {
  // ReactDOM.render
  clientId = '558027906323-pp4gp3279cmjjulkggqn77vgklp58vhm.apps.googleusercontent.com'
  // import GoogleLogin, { GoogleLogout } from '../dist/google-login'

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
    )
  }
}

export default GoogleLoginHelper;
