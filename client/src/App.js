import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Home from "./pages/Home";
import Episodes from "./pages/Episodes";
import Profile from './pages/Profile';
import Login from "./pages/Login";

import "./App.css";

function onAuthRequired({history}) {
  history.push('/login');
}

class App extends Component{
  render() {
    return (
      <Router>
        <Security issuer='https://dev-548725.oktapreview.com'
                  client_id='0oaeuvr4xviHHzas00h7'
                  redirect_uri={window.location.origin + "/implicit/callback"}
                  onAuthRequired={onAuthRequired} >
          <Route path = "/" exact={true} component = {Home} />
          <SecureRoute path= "/profile" component={Profile} />
          <Route path = "/podcast/:id" component = {Episodes} />
          <Route path= "/login" render={() => <Login baseUrl="https://dev-548725.oktapreview.com" />} />
          <Route path= "/implicit/callback" component={ImplicitCallback} />
        </Security>
      </Router>
    )
  }
}

export default App;
