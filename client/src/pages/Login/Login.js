// import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import LoginForm from '../../components/LoginForm';
// import { withAuth } from '@okta/okta-react';
//
// export default withAuth(class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { authenticated: null };
//     this.checkAuthentication = this.checkAuthentication.bind(this);
//     this.checkAuthentication();
//   }
//
//   async checkAuthentication() {
//     const authenticated = await this.props.auth.isAuthenticated();
//     if (authenticated !== this.state.authenticated) {
//       this.setState({ authenticated });
//     }
//   }
//
//   componentDidUpdate() {
//     this.checkAuthentication();
//   }
//
//   render() {
//     if (this.state.authenticated === null) return null;
//     return this.state.authenticated ?
//       <Redirect to={{ pathname: '/' }}/> :
//       <LoginForm baseUrl={this.props.baseUrl} />;
//   }
// });

import React, { Component } from 'react';
import * as OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import '@okta/okta-signin-widget/dist/css/okta-theme.css';

import config from '../../.samples.config';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.signIn = new OktaSignIn({
      /**
       * Note: when using the Sign-In Widget for an OIDC flow, it still
       * needs to be configured with the base URL for your Okta Org. Here
       * we derive it from the given issuer for convenience.
       */
      baseUrl: config.oidc.issuer.split('/oauth2')[0],
      clientId: config.oidc.clientId,
      redirectUri: config.oidc.redirectUri,
      logo: '/react.svg',
      i18n: {
        en: {
          'primaryauth.title': 'Sign in to React & Company',
        },
      },
      authParams: {
        responseType: ['id_token', 'token'],
        issuer: config.oidc.issuer,
        display: 'page',
        scopes: config.oidc.scope.split(' '),
      },
    });
  }
  componentDidMount() {
    this.signIn.renderEl(
      { el: '#sign-in-widget' },
      () => {
        /**
         * In this flow, the success handler will not be called beacuse we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      (err) => {
        throw err;
      },
    );
  }
  render() {
    return (
      <div>
        <div id="sign-in-widget" />
      </div>
    );
  }
}
