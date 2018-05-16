import React, {Component} from "react";
import API from '../../utils/API.js';

class EpisodeListItem extends Component {

  handleEpisodePost = (event) => {
    console.log(this.props);

    const selectedPodcastEpisode = {
      episodeTitle: this.props.title,
      collectionid: this.props.collectionid,
      audioUrl: this.props.audio ,
      showHost: this.props.host ,
      genre: this.props.genre,
      showTitle: this.props.collectionname,
      // showId: this.props.showid,
      episodeThumbnail: this.props.thumbnail,
      releaseDate: this.props.releasedate
    }

    API.addEpisode(selectedPodcastEpisode)
}


  render(){
    return(
      <li className="eps-item">
        <div>
          <p className="font-bold text-xl mb-2">{this.props.title}
            <span>
              <audio controls {...this.props} onPlay = {this.handleEpisodePost}>
                <source src={this.props.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
              </audio>
            </span>
          </p>
        </div>
      </li>
    )
  }
}

export default EpisodeListItem
