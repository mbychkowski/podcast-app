import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Search from "./pages/Search"
import EpisodeList from "./pages/EpisodeList"
import "./App.css";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
      <Route exact path ="/" component={Search} />
      <Route exact path = "/podcast/:id" component ={EpisodeList} />
      </Switch>
    </div>
  </Router>
)

export default App;
