import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import PodcastList from "../PodcastList";
import TopPodcasts from "../TopPodcasts";
import TopEpisodes from "../TopEpisodes";
import API from "../../utils/API.js";



class SearchAndResults extends Component {
    // Set the initial state
    state = {
        results: [],
        feedUrl: "",
        topTenShows:[],
        topTenEpisodes:[]
    };

    saveResults = res => {
        this.setState({
            results: res.data.results
        })
    }

    //Search the top ten shows clicked on
    searchTopTenShows = () => {
      API.getTopTenShows()
        .then(res => {
          this.setState({
            topTenShows:res.data
          })
        })
        .catch(error => console.log(error))
    }

    //Search the top Ten Episodes
    searchTopTenEpisodes = () => {
      API.getTopTenEpisodes()
      .then(res => {
        this.setState({
          topTenEpisodes:res.data
        })
      })
      .catch(error => console.log(error))
    }

    //Display the top ten shows and episodes on the landing page
    componentDidMount(){
      this.searchTopTenShows()
      this.searchTopTenEpisodes()
    }

    render() {
        return(
            <div>
              <Jumbotron className="w-full" saveResults={this.saveResults} />
              {/* display the content so that it wraps */}
                <div className="flex flex-wrap">

                  {/* Make each div responsive to a screen size */}
                  <div className="topPodCasts xl:w-full lg:w-full md:w-full sm:w-full flex flex-wrap group">
                    <TopPodcasts className="w-full" searchTopTenShows={this.state.topTenShows}/>

                    {/* Display the top podcast episodes */}



                        <TopEpisodes
                          className="w-full"
                          // key = {episode._id}
                          // className="w-full"
                          // title = {episode.episodeTitle}
                          // collectionid = {episode.collectionid}
                          // audio = {episode.audioUrl}
                          // host = {episode.showHost}
                          // genre = {episode.genre}
                          // collectionname = {episode.showTitle}
                          // thumbnail = {episode.episodeThumbnail}
                          // releasedate = {episode.releaseDate}
                          // views = {episode.views}
                          searchtoptenepisodes = {this.state.topTenEpisodes}
                        />


                  </div>
                </div>

                  {/* Make each div responsive to a screen size */}
                  <div className="xl:w-full lg:w-full md:w-full sm:w-full flex flex-wrap group">
                    <PodcastList results={this.state.results}/>
                  </div>


            </div>
        )
    }

}

export default SearchAndResults;
