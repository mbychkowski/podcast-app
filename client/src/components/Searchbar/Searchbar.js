import React from "react";
import "./Searchbar.css"

const Searchbar = props =>  {

        return(
            <form className="w-1/2 self-center searchBar">
                <div className="flex items-center border-b border-b-2 border-teal py-2">
                    <input
                      className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2"
                      type="text"
                      name="search"
                      placeholder="Search for a Podcast"
                      aria-label="Full name"
                      onChange={props.handleInputChange}
                      onKeyPress={props.returnKeyPress}
                      value = {props.search}
                     />
                    <button
                      className="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded"
                      type="button"
                      onClick = {props.handlePodcastSearch}
                      >
                    Search
                    </button>
                </div>
            </form>
        )
      }

export default Searchbar
