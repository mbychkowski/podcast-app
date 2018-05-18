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
      duration: this.props.duration,
      episodeThumbnail: this.props.thumbnail,
      releaseDate: this.props.releasedate
    }
    // console.log(selectedPodcastEpisode);

    API.addEpisode(selectedPodcastEpisode)
}



  render(){
    return(
        <li key={this.props.guid}>
          <div>
            <p className="font-bold text-xl mb-2">{this.props.title}
              <span>
                <audio controls
                  title = {this.props.title}
                  author = {this.props.author}
                  categories = {this.props.categories}
                  content = {this.props.content}
                  description = {this.props.description}
                  guid = {this.props.guid}
                  link = {this.props.link}
                  pubdate = {this.props.pubDate}
                  thumbnail = {this.props.thumbnail}
                  onPlay = {this.handleEpisodePost}>
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
