import React, { Component } from "react"

// Import all cpmponents that will be displayed on this page
import Navbar from "../../components/Navbar"
import SearchAndResults from "../../components/SearchAndResults"

class Search extends Component {
    render() {
      return (
        <div>
        <Navbar />
        <SearchAndResults />
      </div>

      );
    }
  }

export default Search
