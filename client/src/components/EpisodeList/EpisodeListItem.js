import React, {Component} from "react";
import API from '../../utils/API.js';

class EpisodeListItem extends Component {

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
      <li>
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
