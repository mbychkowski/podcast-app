import { withAuth } from '@okta/okta-react';
import React, { Component } from 'react';
import { Container, Icon, Image, Menu } from 'semantic-ui-react';
import { checkAuthentication } from '../../helpers/helpers';

import "./Navbar.css";

export default withAuth(class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
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
    return (

      <div>
        <Menu className="bg-black" fixed="top" inverted>
          <Container className="container">
            <Menu.Item as="a" header href="/">
              <span className="logo text-4xl">Octar</span>
            </Menu.Item>
            {this.state.authenticated === true && <Menu.Item id="profile-button" as="a" href="/profile">Profile</Menu.Item>}
            {this.state.authenticated === true && <Menu.Item id="logout-button" as="a" onClick={this.logout}>Logout</Menu.Item>}
            {this.state.authenticated === false && <Menu.Item as="a" onClick={this.login}>Login</Menu.Item>}
            {this.state.authenticated === false && <Menu.Item id="create-account" as="a" href="/account">Sign Up</Menu.Item>}
          </Container>
        </Menu>
      </div>
    );
  }
});
