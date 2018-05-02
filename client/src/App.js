import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./components/Navbar"
import PlayerBottom from "./components/PlayerBottom"
import Search from "./pages/Search"
import Episodes from "./pages/Episodes"
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path = "/" component = { Search } />
        <Route exact path = "/podcast/:id" component = { Episodes } />
      </Switch>
      <PlayerBottom />
    </div>
  </Router>
)

export default App;
