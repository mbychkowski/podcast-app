import React, { Component } from "react";
import "./Jumbotron.css";
import Searchbar from "../Searchbar"
import API from '../../utils/API.js'

class Jumbotron extends Component {

  // Set the initial state
  state = {
    search: "",
    results: []
  };

  // Handle the input change
  handleInputChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }

  //Search the iTunes Affiliate API
  searchItunes = query => {
    API.search(query)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  // Handle the user searching for a podcast
  handlePodcastSearch = event => {
    event.preventDefault();
    this.searchItunes(this.state.search)

  }


  // Display the content
  render(){

    return(
        <div className="jumbotron w-full">
          <Searchbar
            handleInputChange = {this.handleInputChange}
            value = {this.state.search}
            handlePodcastSearch = {this.handlePodcastSearch}
           />
        </div>
    )
  }
}
//Export the Jumbotron
export default Jumbotron;
