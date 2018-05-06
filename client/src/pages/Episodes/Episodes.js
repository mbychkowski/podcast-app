import React, {Component} from "react";

import { EpisodeList, EpisodeListItem } from "../../components/EpisodeList";
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
      mostRecentRelease : this.props.location.state.releasedate,
      genre : this.props.location.state.genre,
    }
    //Add the podcast to the API
    API.addPodcast(selectedPodcast)
  }

  render() {
    return (
    <div>
      <Jumbotron
        title={this.state.feed.title}
        author={this.state.feed.author}
        description={this.state.feed.description}
        image={this.state.feed.image}
      />
      <EpisodeList>

        {this.state.items.map(item => {
          return (
            <EpisodeListItem
              key={item.title}
              title={item.title}
              thumbnail={item.image}
              audio={item.enclosure.link}
            />
          )
        })}

      </EpisodeList>
    </div>);
  }
}

export default Episodes
