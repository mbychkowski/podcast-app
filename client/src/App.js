import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Episodes from "./pages/Episodes";
import Login from "./pages/Login";

import "./App.css";

class App extends Component{
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path = "/" component = { Search } />
            <Route exact path = "/podcast/:id" component = { Episodes } />
            <Route exact path = "/login" component = { Login } />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
