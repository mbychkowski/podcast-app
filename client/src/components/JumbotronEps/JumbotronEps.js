import React from "react";

const JumbotronEps = props => {
  return (

      <div className="container pt-3 mx-auto jumbotron flex w-full mb-4">
        <div className="picInfo w-1/2">
          <img src={props.image} alt="No Image"/>
        </div>
        <div className="text-lg w-1/2">
          <h1 className="leading-loose">{props.title}</h1>
          <h3 className="leading-normal">{props.author}</h3>
          <p className="leading-normal text-lg">{props.description}</p>
        </div>
      </div>

      )
    }


//Export the Jumbotron
export default JumbotronEps;
