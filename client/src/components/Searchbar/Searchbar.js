import React from "react";
import "./Searchbar.css"

const Searchbar = props =>  {

  return(
    <div className="flex w-full items-center">
      <form className="bg-transparent d:flex md:flex-wrap md:justify-between">
        <div className="w-full max-w-lg">
          <input
            className="p-2 mr-2 search-field-style hover:border-pink"
            type="text"
            name="search"
            placeholder="Find a podcast"
            aria-label="Full name"
            onChange={props.handleInputChange}
            value = {props.search}
          />
          <button
            className="p-3 search-button-style hover:bg-pink-darker"
            type="button"
            onClick = {props.handlePodcastSearch}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default Searchbar
