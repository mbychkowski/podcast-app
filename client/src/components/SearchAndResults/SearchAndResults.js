import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import PodcastList from "../PodcastList";
import TopPodcasts from "../TopPodcasts";
import API from "../../utils/API.js"



class SearchAndResults extends Component {
    // Set the initial state
    state = {
        results: [],
        feedUrl: "",
        topTenShows:[]
    };

    saveResults = res => {
        this.setState({
            results: res.data.results
        })
    }

    searchTopTen = () => {
      API.getTopTen()
        .then(res => {
          this.setState({
            topTenShows:res.data
          })
        })
        .catch(error => console.log(error))
    }
    componentDidMount(){
      this.searchTopTen()
    }

    render() {
        return(
            <div>
              <Jumbotron className="w-full" saveResults={this.saveResults} />
              {/* display the content so that it wraps */}
                <div className="flex flex-wrap">

                  {/* Make each div responsive to a screen size */}
                  <div className="xl:w-1/5 lg:w-1/5 md:1/3 sm:w-1/2 flex flex-wrap group">
                    <TopPodcasts className="w-full" searchTopTen={this.state.topTenShows}/>
                  </div>

                  {/* Make each div responsive to a screen size */}
                  <div className="xl:w-4/5 lg:w-4/5 md:2/3 sm:w-1/2 flex flex-wrap group">
                    <PodcastList results={this.state.results}/>
                  </div>

                </div>
            </div>
        )
    }

}

export default SearchAndResults;
