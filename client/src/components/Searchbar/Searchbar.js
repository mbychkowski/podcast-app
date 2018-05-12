import React from "react";
import "./Searchbar.css"

const Searchbar = props =>  {

  return(
    <div className="flex items-center w-full">
      <div className="w-full md:max-w-lg md:mx-auto">
        <form>
          <div className="flex flex-row">
            <input
              className="flex-1 p-2 mr-2 search-field-style hover:border-pink"
              type="text"
              name="search"
              placeholder="Find a podcast"
              aria-label="Full name"
              onChange={props.handleInputChange}
              onKeyPress={props.returnKeyPress}
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
    </div>
  )
}

export default Searchbar
