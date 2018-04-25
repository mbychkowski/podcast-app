import React, { Component } from "react";
import "./Jumbotron.css";
import Searchbar from "../Searchbar"

class Jumbotron extends Component {

// Handle the input change
handleInputChange = event => {
  const name = event.target.name
  const value = event.target.value

  this.setState({
    [name]: value
  })
}

// Handle the user searching for a podcast
handleUserSearch = event => {
  event.preventDefault();
  //Search the iTunes API


}


// Display the content
  render(){

    return(
        <div className="jumbotron w-full">
          <Searchbar
            handleInputChange = {this.handleInputChange}
           />
        </div>
    )
  }
}
//Export the Jumbotron
export default Jumbotron;
