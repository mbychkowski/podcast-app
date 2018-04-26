import React, { Component } from "react";
import PodcastCard from "../PodcastCard"
import "./PodcastList.css";


class PodcastList extends Component {
    render() {
        return(
            <div className="podcastList w-full">
                <PodcastCard 
                results = {this.props.results}
                />    
            </div> 
        )
         
    }
       
}


export default PodcastList;
