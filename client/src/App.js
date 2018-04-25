import React, { Component } from "react";
import ReactDOM from "react-dom";

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import PodcastList from "./components/PodcastList";
import "./App.css";

const app = document.getElementById('app');

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Jumbotron />
        <PodcastList />
      </div>

      );
    }
  }


export default App;
