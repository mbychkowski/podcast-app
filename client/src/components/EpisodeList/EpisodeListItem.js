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

    API.addEpisode(selectedPodcastEpisode)
}


  render(){
    return(
      this.props.episodeitem.map(episode =>(
        <li key={episode.guid}>
          <div>
            <p className="font-bold text-xl mb-2">{episode.title}
              <span>
                <audio controls
                  title = {episode.title}
                  author = {episode.author}
                  categories = {episode.categories}
                  content = {episode.content}
                  description = {episode.description}
                  guid = {episode.guid}
                  link = {episode.link}
                  pubdate = {episode.pubDate}
                  thumbnail = {this.props.thumbnail}
                  onPlay = {this.handleEpisodePost}>
                  <source src={episode.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
              </span>
            </p>
          </div>
        </li>
      ))

    )
  }
}

export default EpisodeListItem
