import React from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import API from "../../utils/API.js"

import "./CreateAccount.css"

export default withAuth(class CreateAccount extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      sessionToken: null
    };
    this.oktaAuth = new OktaAuth({ url: process.env.REACT_APP_ISSUER.split('/oauth2')[0] });
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  async checkAuthentication() {
    const sessionToken = await this.props.auth.getIdToken();
    if (sessionToken) {
      this.setState({ sessionToken });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  handleFirstNameChange(e){
    this.setState({firstName:e.target.value});
  }
  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();

    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    }).then(user => {
      this.oktaAuth.signIn({
        username: this.state.email,
        password: this.state.password
      })
      .then(res => {
        this.setState({
        sessionToken: res.sessionToken
      })

      const userData = {
        firstName: res.user.profile.firstName,
        lastName: res.user.profile.lastName,
        email: res.user.profile.login,
        _id: res.user.id
      }
      API.saveUser(userData);

    });
    })
    .catch(err => console.log(err));
  }

  render(){
    if (this.state.sessionToken) {
      this.props.auth.redirect({ sessionToken: this.state.sessionToken });
      return null;
    }

    return (
      <div className="flex items-center h-screen w-full">
        <div className="w-full bg-white shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <h1 className="block w-full text-center mb-6">Sign Up</h1>
          <form onSubmit={this.handleSubmit} className="mb-4 md:flex md:flex-wrap md:justify-between">
            <div className="field-group mb-4 md:w-1/2">
              <label className="field-label" for="first_name">First Name</label>
              <input value={this.state.firstName} onChange={this.handleFirstNameChange} className="field md:mr-2" type="text" name="first_name" id="first_name"/>
            </div>
            <div className="field-group mb-4 md:w-1/2">
              <label className="field-label md:ml-2" for="last_name">Last Name</label>
              <input value={this.state.lastName} onChange={this.handleLastNameChange} className="field md:ml-2" type="text" name="last_name" id="last_name"/>
            </div>
            <div className="field-group mb-4 md:w-full">
              <label className="field-label" for="email">Email</label>
              <input value={this.state.email} onChange={this.handleEmailChange} className="field" type="email" name="email" id="email"/>
            </div>
            <div className="field-group mb-4 md:w-full">
              <label className="field-label" for="password">Password</label>
              <input value={this.state.password} onChange={this.handlePasswordChange} className="field" type="password" name="password" id="password"/>
            </div>
            <input type="submit" id="submit" value="Register" className="btn btn-teal mx-auto"></input>
          </form>
          <a className="link link-grey w-full text-center" href="/login">Already have an Account?</a>
        </div>
      </div>
    )
  }
});
