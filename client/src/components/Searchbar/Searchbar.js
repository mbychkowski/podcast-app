import React from "react";
import "./Searchbar.css"

const Searchbar = props =>  {

  return(
    <div className="flex items-center h-screen w-full">
      <div className="w-full bg-transparent p-4 m-4 md:max-w-sm md:mx-auto">
        <form className="mb-4 md:flex md:flex-wrap md:justify-between">
          <div>
          <input
            className="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-pink rounded w-3/4 py-2 px-4 text-grey-darker font-bold uppercase"
            type="text"
            name="search"
            placeholder="Find a podcast"
            aria-label="Full name"
            onChange={props.handleInputChange}
            value = {props.search}
            >
          </input>
          <button
            className="btn bg-pink hover:bg-pink-darker text-md text-white p-3 rounded"
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
