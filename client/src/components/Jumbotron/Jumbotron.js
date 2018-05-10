import React, { Component } from "react";
import "./Jumbotron.css";
import Searchbar from "../Searchbar"
import API from "../../utils/API.js"

class Jumbotron extends Component {


  // Display the content
  render(){

    return(
        <div className="jumbotron bg-no-repeat flex content-center justify-center">

          <Searchbar
           />

        </div>
    )
  }
}
//Export the Jumbotron
export default Jumbotron;
