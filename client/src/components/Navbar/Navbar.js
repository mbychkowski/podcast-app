import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import LoginForm from '../LoginForm';
import { checkAuthentication } from '../../helpers/helpers';
import { withAuth } from '@okta/okta-react';

import './Navbar.css';

export default withAuth(class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: null,
      userId: ""
    };
    this.checkAuthentication = checkAuthentication.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  async login() {
    this.props.auth.login('/');
  }

  async logout() {
    this.props.auth.logout('/');
  }

  render() {
    if (this.state.sessionToken) {
      this.props.auth.redirect({ sessionToken: this.state.sessionToken });
      return null;
    }

    if (this.state.authenticated === null) return null;
    const authNav = this.state.authenticated ?
      <ul className="auth-nav nav-list flex">
        <li className="py-6"><a className="nav-list-item hover:bg-blue-darker hover:text-grey-light" href="javascript:void(0)" onClick={this.props.auth.logout}>Logout</a></li>
        <li className="py-6"><Link className="nav-list-item hover:bg-blue-darker hover:text-grey-light" to={`/profile/${this.state.userId}`}>Profile</Link></li>
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
