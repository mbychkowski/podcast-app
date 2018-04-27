import React, {Component} from "react";
import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron";
import { EpisodeList, EpisodeListItem } from "./components/EpisodeList";
import API from "./utils/API";
import "./App.css";

class App extends Component {
  state = {
    results: [],
    search: ""
  };

  componentDidMount() {
    this.searchFeedUrl("https://www.npr.org/rss/podcast.php?id=510289");
  }

  searchFeedUrl = query => {
    API.searchRss(query)
      .then(res =>
        this.setState({
          results: res.data.items
        })).catch(err => console.log(err));
  };

  render() {
    return (
    <div>
      <Navbar />
      <Jumbotron />
      <EpisodeList>

        {this.state.results.map(result => {
          return (
            <EpisodeListItem
              key={result.title}
              title={result.title}
              thumbnail={result.image}
            />
          )
        })}

      </EpisodeList>
    </div>);
  }
}

export default App;
