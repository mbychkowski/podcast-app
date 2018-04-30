import React from "react";

import OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import "@okta/okta-signin-widget/dist/css/okta-theme.css";

import Profile from "../Profile";

class Login extends React.Component{
  constructor(){
    super();
    this.state = { user: null };
    this.widget = new OktaSignIn({
      baseUrl: "https://dev-548725.oktapreview.com",
      clientId: "0oaeuvr4xviHHzas00h7",
      redirectUri: "http://localhost:3000"
    });

    this.showLogin = this.showLogin.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
    console.log("componentDidMount...");
    this.widget.session.get((response) => {
      if(response.status !== "INACTIVE"){
        this.setState({user:response.login});
      }else{
        this.showLogin();
      }
    });
  }

  showLogin(){
    console.log("showLogin...")
    window.Backbone.history.stop();
    this.widget.renderEl({el:this.loginContainer},
      (response) => {
        this.setState({user: response.claims.email});
        this.widget.remove();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  logout(){
    console.log("logout...");
    this.widget.signOut(() => {
      this.setState({user: null});
      this.showLogin();
    });
  }

  render(){
    console.log("rendering...");
    return(
      <div>
        {this.state.user ? (
          <div className="container">
            <Profile name={this.state.user}/>
            <button onClick={this.logout}>Logout</button>
          </div>
        ) : null}
        {this.state.user ? null : (
          <div ref={(div) => {this.loginContainer = div; }} />
        )}
      </div>
    );
  }
}

export default Login
