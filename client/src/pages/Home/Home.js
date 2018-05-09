import React, {Component} from 'react';
import Navbar from "../../components/Navbar"
import SearchAndResults from "../../components/SearchAndResults";

class Home extends Component {

  componentDidMount(){
const currentPage = this.props.pageChange("/")
  return currentPage
  }

  render(){
    return (
      <div>
        <SearchAndResults />
      </div>
    );
  }
}

export default Home;
