import React from "react";
import {Link} from "react-router-dom";
import { EpisodeListItem } from "../EpisodeList";

import "./PlayerBottom.css";

// Create a component that will be the Player that sticks to the bottom of each page, and has continuous playback during navigatoion to each page

class PlayerBottom extends React.Component {

    render() {
      return (
      <div className="activePodcast relative absolute h-24 w-24 bg-grey-light">
          {EpisodeListItem}
        </div>
      )
    }
  }

//Export the component
export default PlayerBottom;
