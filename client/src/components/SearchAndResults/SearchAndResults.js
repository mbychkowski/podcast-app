import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import PodcastList from "../PodcastList";



class SearchAndResults extends Component {
    // Set the initial state
    state = {
        results: []
    };

    saveResults = res => {
        this.setState({
            results: res.data.results
        })
    }

    render() {
        return(
            <div>
                <Jumbotron saveResults={this.saveResults} />
                <PodcastList results={this.state.results}/>
            </div>
        )
    }

}

export default SearchAndResults;
