import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Episodes from "./pages/Episodes";
import Profile from './pages/Profile';
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";

import "./App.css";

function onAuthRequired({history}) {
  history.push("/login");
}

class App extends Component{
  render() {
    return (
      <Router>
        <Security issuer = {process.env.REACT_APP_ISSUER}
                  client_id = {process.env.REACT_APP_CLIENT_ID}
                  redirect_uri = {process.env.REACT_APP_REDIRECT_URI}
                  onAuthRequired = {onAuthRequired} >
          <Navbar />
          <Route path = "/" exact component = {Home} />
          <Route path = "/implicit/callback" component = {ImplicitCallback} />
          <Route path = "/login" render={() => <Login baseUrl = {process.env.REACT_APP_ISSUER.split("/oauth2")[0]} />} />
          <Route path = "/account" component = {CreateAccount} />
          <Route path = "/podcast/:id" component = {Episodes} />
          <SecureRoute path= "/profile/:id" component = {Profile} />
        </Security>
      </Router>
    )
  }
}

export default App;
