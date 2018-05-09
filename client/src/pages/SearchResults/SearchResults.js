import React, {Component} from "react";
import PodcastList from "../../components/PodcastList";
import API from "../../utils/API.js"

{/* Make each div responsive to a screen size */}

class SearchResults extends Component {

  state = {
    results:[]
  }

  //Search the iTunes Affiliate API
  searchItunes = query => {
    API.searchItunes(this.props.location.state.itunesQuery)
      .then(res => {
        this.setState({
          results: res.data.results
        })
      })
      .catch(error => console.log(error))
  }

componentDidMount(){
  this.searchItunes()
}

  render() {
    return(
      <div className="xl:w-full lg:w-full md:2/3 sm:w-1/2 flex flex-wrap group">
        <PodcastList results={this.state.results}/>
      </div>
    )
  }
}

export default SearchResults
