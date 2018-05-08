import React, { Component } from 'react';
import * as OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import '@okta/okta-signin-widget/dist/css/okta-theme.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.signIn = new OktaSignIn({
      /**
       * Note: when using the Sign-In Widget for an OIDC flow, it still
       * needs to be configured with the base URL for your Okta Org. Here
       * we derive it from the given issuer for convenience.
       */
      baseUrl: process.env.REACT_APP_ISSUER.split('/oauth2')[0],
      clientId: process.env.REACT_APP_CLIENT_ID,
      redirectUri: process.env.REACT_APP_REDIRECT_URI,
      logo: '/logo.svg',
      i18n: {
        en: {
          'primaryauth.title': 'Orator',
        },
      },
      authParams: {
        responseType: ['id_token', 'token'],
        issuer: process.env.REACT_APP_ISSUER,
        display: 'page',
        scopes: process.env.REACT_APP_SCOPE.split(' '),
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
