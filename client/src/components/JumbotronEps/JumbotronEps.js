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
      artworkUrl100:this.props.selectedPodcast.artworkurl100,
      feedUrl: this.props.selectedPodcast.feedUrl,
      mostRecentRelease: this.props.selectedPodcast.mostrecentrelease
    }

    console.log('subscribe', podcast);
    API.addSubscription(podcast);
    // API.addUserToSubscription(podcast);
  }


  render(){
    return (

  // jumbotron

    <div className="flex-initial mx-auto jumbotron flex w-full mb-4">

  {/* image */}
      <img className="img float-left" src={this.props.image}></img>
      <div className="main float-right shadow-md max-h-full rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal">
        <div className="mb-8 shadow-sm">

  {/* title */}
          <div className="podcastHeading float-left text-2xl">{this.props.title}</div>

  {/* description */}
          <div className="description max-h-screen flex-col h-32 p-2 text-base shadow-md overflow-y-scroll">
            {this.props.description}
            {/* author */}
            <h4 className="author text-xl leading-normal float-right">{this.props.author}</h4>
          </div>
        </div>

        {/* Adding a div for the subscirbe button */}
        <button
          className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full"
          onClick = {this.subscribe}
          >
          Subscribe
        </button>

      </div>
    </div>
    )
  }

}

//Export the Jumbotron
export default JumbotronEps;
