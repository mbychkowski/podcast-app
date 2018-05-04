import React from "react";

const JumbotronEps = props => {
  return(
    <div className="jumbotron flex w-full mb-4">
      <div className="w-1/3">
        <img src={props.image} alt="No Image"/>
      </div>
      <div className="w-1/3">
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <p>{props.description}</p>
      </div>
      <div className="w-1/3">
      </div>
    </div>
  )
}

//Export the Jumbotron
export default JumbotronEps;
