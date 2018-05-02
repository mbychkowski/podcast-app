import React from "react";
import {Link} from "react-router-dom";
import { EpisodeList, EpisodeListItem } from "./EpisodeList";

import "./PlayerBottom.css";

// Create a component that will be the Player that sticks to the bottom of each page, and has continuous playback during navigatoion to each page

class PlayerBottom extends Component {

    state = {
      currentPodcast: EpisodeListItem
    };

    handleEpisodeChange = Episode => {
    this.setState({ currentEpisode: null });
  };

  renderEpisode = () => {
    if (this.state.currentEpisode === !null) {
      return <EpisodeListItem />;

// When this component mounts, load the current podcast
  shouldComponentUpdate(clicked, currentEpisode)
  }

  const clicked = () => {
    currentEpisode(EpisodeListItem.props)
  };

    render(); {
      return(
        <div className="activePodcast relative absolute h-24 w-24 bg-grey-light">
        <div className="absolute pin-x pin-b h-8 bg-grey-darker"></div>
        {this.clicked}
        </div>
        )}
      }
    }

//Export the component
export default PlayerBottom;
