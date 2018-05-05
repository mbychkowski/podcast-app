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
            <div className="flex flex-col mb-4">
              <label className="mb-2 uppercase font-bold text-lg" for="first_name">First Name</label>
              <input className="border py-2 px-3" type="text" name="first_name" id="first_name"/>
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 uppercase font-bold text-lg" for="last_name">Last Name</label>
              <input className="border py-2 px-3" type="text" name="last_name" id="last_name"/>
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 uppercase font-bold text-lg" for="email">Email</label>
              <input className="border py-2 px-3" type="email" name="email" id="email"/>
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 uppercase font-bold text-lg" for="password">Password</label>
              <input className="border py-2 px-3" type="password" name="password" id="password"/>
            </div>
            <button className="block bg-teal hover:bg-teal-darker text-white uppercase text-lg font-bold mx-auto p-4" type="submit">Create Account</button>
          </form>
          <a className="block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker" href="/login">Already have an Account?</a>
        </div>
      </div>
    )
  }
}
