import React, {Component} from "react";
import "./TopEpisodes.css"
import API from "../../utils/API.js"

class TopEpisodes extends Component {

  handleEpisodePost = (event) => {
    console.log(this.props);

    const selectedPodcastEpisode = {
      showTitle: this.props.title,
      collectionid: this.props.collectionid,
      audioUrl: this.props.audio ,
      showHost: this.props.host ,
      genre: this.props.genre,
      episodeTitle: this.props.collectionname,
      episodeThumbnail: this.props.thumbnail,
      releaseDate: this.props.releasedate
    }

    API.addEpisode(selectedPodcastEpisode)
  }

  render(){
    return(

      //Map through each

        <div className="max-w-md w-full border-t border-r">
          <div className="border-r border-b border-l border-grey-light lg:border-l-0  lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">

              <div className="text-black font-bold text-xl mb-2">{this.props.title}</div>
            </div>

            <div className="flex items-center">
              <img className="w-10 h-10 rounded-full mr-4" src={this.props.thumbnail} alt={this.props.title}/>
              <div className="text-sm">
                <p className="text-black leading-none">{this.props.collectionname}</p>
                <p className="text-grey-dark">Views: {this.props.views}</p>
              </div>
            </div>
            <span>
              <audio controls {...this.props} onPlay = {this.handleEpisodePost}>
                <source src={this.props.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
              </audio>
            </span>
          </div>
        </div>




    )
  }
}

export default TopEpisodes

return(
  <div className="xl:w-1/2 l:w-1/2 m:w-1/2 s:w-full">
  <div className="flex flex-row justify-center mt-2">
    <h1>Top 10 Podcasts</h1>
  </div>


    <div className="flex flex-row flex flex-wrap group mt-4 ml-2 justify-center">
      {/* Map the get call for the top ten podcasts to the component */}

      {this.props.searchTopTenShows.map(podcastShows => (
        <div className="mb-2" key={podcastShows._id}>

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
          <img className="rounded" src={podcastShows.artworkUrl600} />
        </Link>
      </div>

      ))}
    </div>


  </div>
)
