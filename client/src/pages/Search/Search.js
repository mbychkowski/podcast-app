import React, { Component } from "react"

// Import all cpmponents that will be displayed on this page
import Navbar from "../../components/Navbar"
import Jumbotron from "../../components/Jumbotron"
import PodcastList from "../../components/PodcastList"

class Search extends Component {
    render() {
      return (
        <div>
          <Navbar />
          <Jumbotron />
          <PodcastList />
        </div>
      
      );
    }
  }