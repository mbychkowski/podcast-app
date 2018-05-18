import React, {Component} from "react";

import EpisodeList from "../../components/EpisodeList/EpisodeList.js";
import EpisodeListItem from "../../components/EpisodeList/EpisodeListItem.js"
import Jumbotron from "../../components/JumbotronEps";
import PropTypes from 'prop-types';

import API from "../../utils/API";

class Episodes extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  state = {
    items: [],
    feed: {},
    search: ""
  };

  componentDidMount() {
    this.searchFeedUrl(this.props.location.state.feedUrl);
    this.postPodcast();
  }

  searchFeedUrl = query => {
    API.searchRss(query)
      .then(res =>
        this.setState({
          items: res.data.items,
          feed: res.data.feed
        }))
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
  };

  // Create a function that will post the selected podcast to the db
  postPodcast = () => {
    const selectedPodcast = {
      feedUrl: this.props.location.state.feedUrl,
      artistId : this.props.location.state.artistid,
      collectionId : this.props.location.state.collectionid,
      artistName : this.props.location.state.artistname,
      collectionName : this.props.location.state.collectionname,
      artworkUrl30 : this.props.location.state.artworkurl30,
      artworkUrl60 : this.props.location.state.artworkurl60,
      artworkUrl100 : this.props.location.state.artworkurl100,
      artworkUrl600: this.props.location.state.artworkUrl600,
      mostRecentRelease : this.props.location.state.releasedate,
      genre : this.props.location.state.genre,
    }
    //Add the podcast to the API
    API.addPodcast(selectedPodcast)
  }

  render() {

    // Define the constants that will need to be passed as a property to each episode
    const collectionid = this.props.location.state.collectionid
    const collectionname = this.props.location.state.collectionname
    const thumbnail=this.props.location.state.artworkurl600
    const host = this.props.location.state.artistname
    const genre = this.props.location.state.genre

    return (
    <div>
      <Jumbotron
        title={this.state.feed.title}
        author={this.state.feed.author}
        description={this.state.feed.description}
        image={this.state.feed.image}
        selectedPodcast = {this.props.location.state}
      />

      <EpisodeList>

        {this.state.items.map(episode =>(

          <EpisodeListItem
            key = {episode.enclosure.length}
            collectionid = {collectionid}
            collectionname = {collectionname}
            thumbnail= {thumbnail}
            host = {host}
            genre = {genre}
            audio = {episode.enclosure.link}
            title = {episode.title}
            author = {episode.author}
            categories = {episode.categories}
            content = {episode.content}
            description = {episode.description}
            guid = {episode.guid}
            link = {episode.link}
            pubdate = {episode.pubDate}
            thumbnail = {thumbnail}
            onPlay = {this.handleEpisodePost}

          />

        ))}






      </EpisodeList>
    </div>);
  }
}

export default Episodes;
