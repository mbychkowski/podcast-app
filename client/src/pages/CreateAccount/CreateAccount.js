import React, { Component } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';

import "./CreateAccount.css"

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
      <div className="flex items-center h-screen w-full">
        <div className="w-full bg-white shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <h1 className="block w-full text-center mb-6">Sign Up</h1>
          <form className="mb-4 md:flex md:flex-wrap md:justify-between" action="/" method="post">
            <div className="field-group mb-4 md:w-1/2">
              <label className="field-label" for="first_name">First Name</label>
              <input className="field md:mr-2" type="text" name="first_name" id="first_name"/>
            </div>
            <div className="field-group mb-4 md:w-1/2">
              <label className="field-label md:ml-2" for="last_name">Last Name</label>
              <input className="field md:ml-2" type="text" name="last_name" id="last_name"/>
            </div>
            <div className="field-group mb-4 md:w-full">
              <label className="field-label" for="email">Email</label>
              <input className="field" type="email" name="email" id="email"/>
            </div>
            <div className="field-group mb-4 md:w-full">
              <label className="field-label" for="password">Password</label>
              <input className="field" type="password" name="password" id="password"/>
            </div>
            <button className="btn btn-teal mx-auto" type="submit">Create Account</button>
          </form>
          <a className="link link-grey w-full text-center" href="/login">Already have an Account?</a>
        </div>
      </div>
    )
  }
}
