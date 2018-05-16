import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import LoginForm from '../LoginForm';
import { withAuth } from '@okta/okta-react';

import './Navbar.css';

export default withAuth(class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    if (this.state.authenticated === null) return null;
    const authNav = this.state.authenticated ?
      <ul className="auth-nav nav-list flex">
        <li className="py-6"><a className="nav-list-item hover:bg-blue-darker hover:text-grey-light" href="javascript:void(0)" onClick={this.props.auth.logout}>Logout</a></li>
        <li className="py-6"><Link className="nav-list-item hover:bg-blue-darker hover:text-grey-light" to="/profile">Profile</Link></li>
      </ul> :
      <ul className="auth-nav nav-list flex">
        <li className=""><LoginForm baseUrl={this.props.baseUrl} /></li>
      </ul>;
    return (
      <nav className="bg-blue-darkest flex items-center fixed pin-t w-full justify-between z-50">
        <ul className="nav-list flex">
          <li className="py-6"><Link className="nav-list-item hover:bg-blue-darker hover:text-grey-light" to="/">Orator</Link></li>
        </ul>
        {authNav}
      </nav>
    )
  }
});
