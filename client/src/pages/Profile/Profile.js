import React from "react";

const Profile = props => {

  return (
    <div className="jumbotron w-full flex content-center justify-center">
      <h1>Hello, {props.name}</h1>
    </div>
  )
}

export default Profile;
