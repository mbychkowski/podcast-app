import React from 'react';
import ReactDOM from 'react-dom';

// Google login

// const responseGoogle = (response) =>
//  console.log(response);

// HandleSignIn function
const Jumbotron = props => {
    return(
      <div className="signIn"> hello
        <div className="g-signin2" data-onsuccess="onSignIn"></div>
      </div>
    )
  };

export default Jumbotron;
