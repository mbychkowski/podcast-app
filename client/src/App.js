import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Episodes from "./pages/Episodes";
import Profile from './pages/Profile';
import Login from "./pages/Login";

import config from "./.samples.config";

import "./App.css";

function onAuthRequired({history}) {
  history.push("/login");
}

class App extends Component{
  render() {
    return (
      <Router>
        <Security issuer = {config.oidc.issuer}
                  client_id = {config.oidc.clientId}
                  redirect_uri = {config.oidc.redirectUri}
                  onAuthRequired = {onAuthRequired} >
          <Navbar />
          <Route path = "/" exact component = {Home} />
          <Route path = "/implicit/callback" component = {ImplicitCallback} />
          <Route path = "/login" render={() => <Login baseUrl = {config.oidc.issuer.split("/oauth2")[0]} />} />
          <Route path = "/podcast/:id" component = {Episodes} />
          <SecureRoute path= "/profile" component = {Profile} />
        </Security>
      </Router>
    )
  }
}

export default App;
