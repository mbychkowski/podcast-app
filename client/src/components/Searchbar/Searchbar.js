import React, {Component} from "react";
import "./Searchbar.css"
import API from "../../utils/API.js"
import { Link, Redirect } from 'react-router-dom'

class Searchbar extends Component {

  state = {
    search: ""
  }

  // Handle the input change
  handleInputChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      search: value
    })
  }

  // Handle Return/Enter Key press
  returnKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.context.router.push({
        pathname: '/search',
        state: { itunesQuery: this.state.search }
       })
    }
  }

  //Search the iTunes Affiliate API
  // searchItunes = query => {
  //   API.searchItunes(query)
  //     .then(res => {
  //       this.props.saveResults(res)
  //       console.log(res)
  //     })
  //     .catch(error => console.log(error))
  // }

  // handlePodcastSearch = event => {
  //
  // }



  render(){
    return(
        <form className="w-1/2 self-center searchBar">
            <div className="flex items-center border-b border-b-2 border-teal py-2">
                <input
                  className="appearance-none searchBar bg-transparent border-none w-full text-white mr-3 py-1 px-2"
                  type="text"
                  name="search"
                  placeholder="Search for a Podcast"
                  aria-label="Full name"
                  onChange={this.handleInputChange}
                  value = {this.state.search}
                 />
                 <Link to={{
                 pathname: '/search',
                 state: { itunesQuery: this.state.search }
               }}>
                <button
                  className="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded"
                  type="button"
                  // onSubmit = {this.returnKeyPress}
                  // onKeyPress = {}
                  >
                Search
                </button>
              </Link>
            </div>
        </form>
    )
  }
}

export default Searchbar
