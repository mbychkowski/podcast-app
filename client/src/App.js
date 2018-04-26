import React, { Component } from "react";
import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron";
import PodcastList from "./components/PodcastList";
import SearchAndResults from "./components/SearchAndResults";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SearchAndResults />
      </div>
    
    );
  }
}

export default App;
