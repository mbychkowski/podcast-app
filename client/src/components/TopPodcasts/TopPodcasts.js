import React, { Component } from "react";
import "./TopPodcasts.css";
import { Link } from 'react-router-dom'

class TopPodcasts extends Component {


  render(){
    return(
      <div className="max-w-md w-full border-t border-r">
        <h1>Top 10 Podcasts</h1>

        {/* Map the get call for the top ten podcasts to the component */}
        {this.props.searchTopTen.map(podcastShows => (
          <div key={podcastShows._id}>

            {/* Provide the ability to pass information about the selected podcast to the displayed eposide list */}
            <Link to = {{
                pathname: `/podcast/${podcastShows.collectionId}`,
                state:
                  {
                    feedUrl: podcastShows.feedUrl,
                    artistid : podcastShows.artistId,
                    collectionid : podcastShows.collectionId,
                    artistname : podcastShows.artistName,
                    collectionname : podcastShows.collectionName,
                    feedurl : podcastShows.feedUrl,
                    artworkurl30 : podcastShows.artworkUrl30,
                    artworkurl60 : podcastShows.artworkUrl60,
                    artworkurl100 : podcastShows.artworkUrl100,
                    mostrecentrelease : podcastShows.releaseDate,
                    genre : podcastShows.genres
                  }
            }}

            // Remove the styling from the text for a URL
            style={{ textDecoration: 'none' }}>
            <div className="border-r border-b border-l border-grey-light lg:border-l-0  lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">

              <div className="mb-8">

                <div className="text-black font-bold text-xl mb-2">{podcastShows.collectionName}</div>
              </div>

              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src={podcastShows.artworkUrl30} alt="Avatar of Jonathan Reinink"/>
                <div className="text-sm">
                  <p className="text-black leading-none">{podcastShows.artistName}</p>
                  <p className="text-grey-dark">Views: {podcastShows.views}</p>
                </div>
              </div>

            </div>
          </Link>
        </div>

        ))}

      </div>
    )
  }
}

export default TopPodcasts;
