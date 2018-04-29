import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component{

  // static contextTypes = {
  //   user: React.PropTypes.object
  // };

  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <Link to = {"/"}>
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
          </Link>
        </div>
        <div className="navbar-collapse collapse">
          <ul>
            <li><Link to={"/"}>browse</Link></li>
            <li><Link to={"/login"}>login</Link></li>
          </ul>
        </div>
    </nav>
  )}
}

export default Navbar;
