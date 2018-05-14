import React, { Component } from "react";
import "./Jumbotron.css";
import Searchbar from "../Searchbar"
import API from "../../utils/API.js"

class Jumbotron extends Component {

  // Set the initial state
  state = {
    search: ""
  };

  // Handle the input change
  handleInputChange = event => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  // Handle Return/Enter Key press
  returnKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handlePodcastSearch(event)
    }
  }

  //Search the iTunes Affiliate API
  searchItunes = query => {
    API.searchItunes(query)
      .then(res => {
        this.props.saveResults(res)
        console.log(res)
      })
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
        <div className="flex-initial mx-auto jumbotron flex w-full mb-4">

           <Searchbar
            handleInputChange = {this.handleInputChange}
            returnKeyPress = {this.returnKeyPress}
            value = {this.state.search}
            handlePodcastSearch = {this.handlePodcastSearch}
           />
        </div>
    )
  }
}
//Export the Jumbotron
export default Jumbotron;
