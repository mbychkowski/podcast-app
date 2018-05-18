import React, {Component} from "react";

import EpisodeList from "../../components/EpisodeList/EpisodeList.js";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer.js";
import EpisodeListItem from "../../components/EpisodeList/EpisodeListItem.js"
import Jumbotron from "../../components/JumbotronEps";
import PropTypes from 'prop-types';

import API from "../../utils/API";

class Episodes extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    handlePlayProp: PropTypes.func
  }

  constructor(props){
          super(props);
          //does whatever stuff
          this.handlePlayProp = this.handlePlay.bind(this);
      }

  state = {
    audio: "",
    items: [],
    feed: {},
    search: ""
  };

  componentDidMount() {
    this.searchFeedUrl(this.props.location.state.feedUrl);
    this.postPodcast();
  }

  handlePlay = (audioString) => {
    this.setState({
      audio: audioString
    })
    console.log(audioString);
    console.log('this');
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
      <div>
      <EpisodeList>

        {this.state.items.map(item => {

          return (
            <EpisodeListItem
              // onClick={this.handlePlay}
              onClick={()=>{this.props.handlePlayProp(this.state.audio)}}
              key={item.title}
              collectionid = {this.props.location.state.collectionid}
              collectionname = {this.props.location.state.collectionname}
              title={item.title}
              // showid = {item.episode._text}
              thumbnail={this.props.location.state.artworkurl30}
              audio={item.enclosure.link}
              host = {this.props.location.state.artistname}
              genre = {this.props.location.state.genre}
              releasedate = {item.pubDate}
              views = {item.views}
            />
          )
        })}

      </EpisodeList>
    <AudioPlayer audio={this.state.audio}/>
    </div>
    </div>

    // const A = 65 // ASCII character code

    // class Alphabet extends React.Component {
    //   constructor(props) {
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    //     this.state = {
    //       justClicked: null,
    //       letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i))
    //     };
    //   }
    //   handleClick(letter) {
    //     this.setState({ justClicked: letter });
    //   }
    //   render() {
    //     return (
    //       <div>
    //         Just clicked: {this.state.justClicked}
    //         <ul>
    //           {this.state.letters.map(letter =>
    //             <li key={letter} onClick={() => this.handleClick(letter)}>
    //               {letter}
    //             </li>
    //           )}
    //         </ul>
    //       </div>
    //     )
    //   }
    // }
    );
  }
}

export default Episodes;
