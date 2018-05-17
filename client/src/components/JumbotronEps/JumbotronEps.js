import React, {Component} from "react";
import "./JumbotronEps.css";
import API from "../../utils/API.js";

class JumbotronEps extends Component{

  //Has the logged in user subscribed to the podcast
  state = {
    subscribed: ""
  }

  //Allow a user to subscribe to a podcast
  subscribe = () => {

    var local = window.localStorage["okta-token-storage"]
    var localNre = JSON.parse(local)
    var userId = localNre.idToken.claims.sub

    const podcast = {
      userId: userId,
      collectionId: this.props.selectedPodcast.collectionid,
      collectionName: this.props.selectedPodcast.collectionname,
      artistId: this.props.selectedPodcast.artistid,
      artistName: this.props.selectedPodcast.artistname,
      artworkUrl600:this.props.image,
      feedUrl: this.props.selectedPodcast.feedUrl,
      mostRecentRelease: this.props.selectedPodcast.mostrecentrelease,
      genres: this.props.selectedPodcast.genre
    }

    API.addSubscription(podcast);
    API.addUserToSubscription(podcast);
  }

  render(){
    return (

  // jumbotron

    <div className="flex items-center mt-8 w-full">
      <div className="flex max-full mt-8 justify-between md:max-w-2xl md:mx-auto">

        <div className="mt-8 md:w-1/2">
          {/* image */}
          <img className="img" src={this.props.image}></img>
        </div>

        <div className="mt-8 md:w-1/2">
          {/* title */}
          <h2 className="mb-4">{this.props.title}</h2>
          {/* description */}
          <p className="mb-4 text-justify">
            {this.props.description}
          </p>
          {/* author */}
          <h3 className="mb-4">{this.props.author}</h3>
          {/* Adding a div for the subscirbe button */}
          <button
            className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full"
            onClick = {this.subscribe}
            >
            Subscribe
          </button>
        </div>

        </div>
      </div>
    )
  }

}

//Export the Jumbotron
export default JumbotronEps;
