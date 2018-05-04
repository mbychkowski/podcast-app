import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import { Header, Icon, Table } from 'semantic-ui-react';
import { checkAuthentication } from "../../helpers/helpers";

export default withAuth(class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { userinfo: null, ready: false };
    this.checkAuthentication = checkAuthentication.bind(this);
  }

  async componentDidMount() {
    await this.checkAuthentication();
    this.applyClaims();
  }

  async componentDidUpdate() {
    await this.checkAuthentication();
    this.applyClaims();
  }

  async applyClaims() {
    if (this.state.userinfo && !this.state.claims) {
      const claims = Object.entries(this.state.userinfo);
      this.setState({ claims, ready: true });
    }
  }

  render() {
    return (
      <div>
        <div className="text-black">
          <h1>PROTECTED PAGE</h1>
          <h1>PROTECTED PAGE</h1>
          <h1>PROTECTED PAGE</h1>
          <h1>PROTECTED PAGE</h1>
          <h1>PROTECTED PAGE</h1>
          <h1>PROTECTED PAGE</h1>
        </div>
      </div>
    )
  }
});
