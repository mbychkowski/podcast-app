import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';

import './LoginForm.css'

export default withAuth(class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: null,
      error: null,
      username: '',
      password: ''
    }

    this.oktaAuth = new OktaAuth({ url: props.baseUrl });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.oktaAuth.signIn({
      username: this.state.username,
      password: this.state.password
    })
      .then(res => this.setState({
        sessionToken: res.sessionToken
      }))
      .catch(err => {
        this.setState({error: err.message});
        console.log(err.statusCode + ' error', err)
      });
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    if (this.state.sessionToken) {
      this.props.auth.redirect({ sessionToken: this.state.sessionToken });
      return null;
    }

    const errorMessage = this.state.error ?
	<span className="error-message">{this.state.error}</span> :
	null;

  return (
    <div className="flex items-center">
      <form onSubmit={this.handleSubmit} className="md:flex md:flex-wrap md:justify-between">
        <div className="flex field-group md:w-2/5">
          <label className="field-label text-grey-light text-xs">Username</label>
          <input
            id="username" type="text" className="field rounded hover:border-pink"
            value={this.state.username}
            onChange={this.handleUsernameChange} />
        </div>
        <div className="field-group md:w-2/5">
          <label className="field-label text-grey-light text-xs md:ml-2">Password</label>
          <input
            id="password" type="password" className="field rounded hover:border-pink md:ml-2"
            value={this.state.password}
            onChange={this.handlePasswordChange} />
        </div>
        <input
          id="submit" type="submit" value="Login"
          className="p-6 text-xl text-grey-light tracking-wide bg-blue-darkest submit-btn md:w-1/5 hover:bg-blue-darker hover:text-grey-light"
        />
      </form>
      <Link className="nav-list-item hover:bg-blue-darker hover:text-grey-light" to="/account">Register</Link>
    </div>
    )
  }
});
