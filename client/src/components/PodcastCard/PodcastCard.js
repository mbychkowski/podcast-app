import React, { Component } from "react";
import Pill from "./Pill";
import { Link } from 'react-router-dom'
import "./PodcastCard.css"

class PodcastCard extends Component {

  render () {
    return(

        // This will display in a container that wraps the cards onto a new line as they fill the space
        <div className="podcastCard w-full flex flex-wrap group" >

            {/* Go through each result and map to a new array called podcasr. This will then dipslay the content from the response */}
            {this.props.results.map(podcast => (

                <div key = {podcast.collectionId}
                className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-blue-lighter sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/5 p-2"
                artistid = {podcast.artistId}
                collectionid = {podcast.collectionId}
                artistname = {podcast.artistName}
                collectionname = {podcast.collectionName}
                feedurl = {podcast.feedUrl}
                artworkurl30 = {podcast.artworkUrl30}
                artworkurl60 = {podcast.artworkUrl60}
                artworkurl100 = {podcast.artworkUrl100}
                mostrecentrelease = {podcast.releaseDate}
                genre = {podcast.genres}
                >
                  <Link to = {{
                      pathname: `/podcast/${podcast.collectionId}`,
                      state: {feedUrl: podcast.feedUrl}
                  }}
                  onClick={() => this.handlePodcastSelect()}
                    style={{ textDecoration: 'none' }}>
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
  handlePodcastSelect = (event) => {
    console.log(this.props)
  }

}

export default PodcastCard
