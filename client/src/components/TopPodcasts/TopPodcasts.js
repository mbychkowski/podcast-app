import React, { Component } from "react";
import "./TopPodcasts.css";
import { Link } from 'react-router-dom'

class TopPodcasts extends Component {


  render(){
    return(
      <div className="max-w-md w-full sm:w-18 border-t border-r">
        <h1>Top 10 Podcasts</h1>

        {/* Map the get call for the top ten podcasts to the component */}

        {this.props.searchTopTenShows.map(podcastShows => (
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
                    artworkurl600 : podcastShows.artworkUrl600,
                    mostrecentrelease : podcastShows.releaseDate,
                    genre : podcastShows.genres
                  }
            }}

            // Remove the styling from the text for a URL
            style={{ textDecoration: 'none' }}>
            <img className="rounded-full" src={podcastShows.artworkUrl600} />
          </Link>
        </div>

        ))}

      </div>
    )
  }
}

export default TopPodcasts;
