import React, {Component} from "react";
import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron";
import { EpisodeList, EpisodeListItem } from "./components/EpisodeList";
import API from "./utils/API";
import "./App.css";

class Episodes extends Component {
  state = {
    items: [],
    feed: {},
    search: ""
  };

  componentDidMount() {
    this.searchFeedUrl("https://www.npr.org/rss/podcast.php?id=510289");
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
      <Navbar />
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
