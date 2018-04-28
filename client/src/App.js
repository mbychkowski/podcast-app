import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Search from "./pages/Search"
import Episodes from "./pages/Episodes"
import "./App.css";
import { Security, ImplicitCallback } from '@okta/okta-react';

const config = {
  issuer: 'https://dev-548725.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '{clientId}'
}


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Security issuer={config.issuer}
          client_id={config.client_id}
          redirect_uri={config.redirect_uri}
        >
          <Route exact path = "/" component = { Search } />
          <Route exact path = "/podcast/:id" component = { Episodes } />

          <Route exacr path = "/implicit/callback" component = { ImplicitCallback }/>
        </Security>
      </Switch>
    </div>
  </Router>
)

export default App;
