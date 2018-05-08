import React, { Component } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  render() {
    return (
      <div>
        <div>
          <h1>Sign Up</h1>
          <form action="/" method="post">
            <div>
              <label for="first_name">First Name</label>
              <input type="text" name="first_name" id="first_name"/>
            </div>
            <div>
              <label for="last_name">Last Name</label>
              <input type="text" name="last_name" id="last_name"/>
            </div>
            <div>
              <label for="email">Email</label>
              <input className="border" type="email" name="email" id="email"/>
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" name="password" id="password"/>
            </div>
            <button type="submit">Create Account</button>
          </form>
          <a href="/login">Already have an Account?</a>
        </div>
      </div>
    )
  }
}
