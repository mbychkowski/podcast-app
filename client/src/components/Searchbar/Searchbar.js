import React from "react";
import "./Searchbar.css"

const Searchbar = props =>  {

        return(
            <form class="w-full max-w-sm">
                <div class="flex items-center border-b border-b-2 border-teal py-2">
                    <input class="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2" type="text" name="Search" placeholder="Search for a Podcast" aria-label="Full name" onChange={props.handleInputChange} />
                    <button class="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded" type="button">
                    Search
                    </button>
                </div>
            </form>
        )
}

export default Searchbar
