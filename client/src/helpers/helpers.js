async function checkAuthentication() {
  
  const authenticated = await this.props.auth.isAuthenticated();

  if (authenticated !== this.state.authenticated) {

    if (authenticated && !this.state.userinfo) {

      const userinfo = await this.props.auth.getUser();
      this.setState({ authenticated, userinfo });

      var local = window.localStorage["okta-token-storage"]
        var localNre = JSON.parse(local)
        var userId = localNre.idToken.claims.sub
        this.setState({
          userId: userId
        });

    } else {
      this.setState({ authenticated });
    }
  }
}

/* eslint-disable import/prefer-default-export */
export { checkAuthentication };
