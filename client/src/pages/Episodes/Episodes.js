import React, {Component} from "react";

import {
  EpisodeList,
  EpisodeListItem }       from "../../components/EpisodeList";
import Jumbotron          from "../../components/JumbotronEps";
import API                from "../../utils/API";

class Episodes extends Component {

  state = {
    feedUrl: "",
    items: [],
    feed: {},
    search: ""
  };

  componentDidMount() {
    // this.setState({
    //   feedUrl: this.props.state.location.feedUrl
    // });
    this.searchFeedUrl("https://wtfpod.libsyn.com/rss");
  }

  searchFeedUrl = query => {
    API.searchRss(query)
      .then(res =>
        this.setState({
          items: res.data.items,
          feed: res.data.feed
        })).then(console.log(this.state)).catch(err => console.log(err));
  };

  render() {
    return (
    <div>
      <Jumbotron
        name={this.state.feed.name}
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
