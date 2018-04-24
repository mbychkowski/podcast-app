import React, { Component } from "react";
import ReactDOM from "react-dom";
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import PodcastList from "./components/PodcastList";
import "./App.css";

const app = document.getElementById('app');

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <PodcastList />
      </div>

    );

    // ReactDOM.render
    const clientId = '617246850621-95f9qhmehd380g2df86pjhrqc84n8nij.apps.googleusercontent.com'
    // import GoogleLogin, { GoogleLogout } from '../dist/google-login'

    const success = response => {
      console.log(response)
    }

    const error = response => {
      console.error(response)
    }

    const loading = () => {
      console.log('loading')
    }

    const logout = () => {
      console.log('logout')
    }

    ReactDOM.render(
      <div>
        <GoogleLogin
          clientId={clientId}
          scope="https://www.googleapis.com/auth/analytics"
          onSuccess={success}
          onFailure={error}
          onRequest={loading}
          offline={false}
          approvalPrompt="force"
          responseType="id_token"
          isSignedIn
          // disabled
          // prompt="consent"
          // className='button'
          // style={{ color: 'red' }}
        >
          <span>Analytics</span>
        </GoogleLogin>

        <GoogleLogin
          clientId={clientId}
          scope="https://www.googleapis.com/auth/adwords"
          onSuccess={success}
          onFailure={error}
          onRequest={loading}
          approvalPrompt="force"
          responseType="code"
          // uxMode="redirect"
          // redirectUri="http://google.com"
          // disabled
          // prompt="consent"
          // className='button'
          // style={{ color: 'red' }}
        >
          <span>Adwords</span>
        </GoogleLogin>

        <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} />
      </div>,
      document.getElementById('google-login')
    )
  }
};

export default App;
