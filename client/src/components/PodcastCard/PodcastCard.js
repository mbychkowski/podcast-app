import React from "react";
import Pill from "./Pill";
import { Link } from 'react-router-dom'
import "./PodcastCard.css"

const PodcastCard = props => {
    return(

        // This will display in a container that wraps the cards onto a new line as they fill the space
        <div className="podcastCard w-full flex flex-wrap group" >

            {/* Go through each result and map to a new array called podcasr. This will then dipslay the content from the response */}
            {props.results.map(podcast => (

                <div key = {podcast.collectionId} className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-blue-lighter sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/5 p-2" feed = {podcast.feedUrl}>
                  <Link to = {`/podcast/${podcast.collectionId}`} style={{ textDecoration: 'none' }}>
                    <img className="w-full" src={podcast.artworkUrl600} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 podcastText">{podcast.collectionName}</div>
                        <p className="text-grey-darker text-base">
                        {podcast.artistName}
                        </p>
                    </div>
                    <div className="px-6 py-4">

                        {/* Adding a Pill for each genre */}

                        {/* Need to pass a prop as a result of this */}
                        <Pill
                        genres = {podcast.genres}
                        />
                    </div>
                    </Link>
                </div>


            ))}
        {/* Go through each result and return a podcast card for each result */}


        </div>

    )
}

export default PodcastCard
