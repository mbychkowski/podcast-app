import React from 'react';
import { withAuth } from '@okta/okta-react';
import PodcastCard from "../../components/PodcastCard";
import API from "../../utils/API";

import "./Profile.css"

export default withAuth(class ProfilePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: null, // for Okta
      subscriptions: []
    };
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  async getCurrentUser(){
    this.props.auth.getUser()
      .then(user => this.setState({user}));
  }

  componentDidMount(){
    this.getCurrentUser();
    this.getSubscription(this.props.match.params.id);
  }

  getSubscription = (userId) => {
    API.getSubscription(userId)
      .then(res =>
      this.setState({
        subscriptions: res.data
      })
    )
  }

  render() {
    if(!this.state.user) return null;
    return (
      <div className="user-profile">
        <section className="m-8">
          <h1>Welcome, {this.state.user.name}</h1>
        </section>
        <div className="m-8">
          <PodcastCard
            results={this.state.subscriptions}
          />
        </div>
      </div>

    )
  }
});
