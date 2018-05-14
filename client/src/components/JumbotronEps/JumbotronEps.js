import React from "react";
import "./JumbotronEps.css"

const JumbotronEps = props => {
  return (

// jumbotron

  <div className="flex-initial mx-auto jumbotron flex w-full mb-4">

{/* image */}
        <img className="img float-left" src={props.image}></img>
        <div className="main float-right max-h-full rounded lg:rounded-b-none lg:rounded-r p-4 leading-normal">
        <div className="mb-8 shadow-sm">

{/* title */}
        <div className="podcastHeading float-left shadow-md text-2xl sm: mar">{props.title}</div>

{/* description */}
        <div className="description max-h-screen flex-col p-2 text-base shadow-md overflow-y-scroll">
          {props.description}
{/* author */}
          <h4 className="author text-xl leading-normal float-right">{props.author}</h4>
        </div>
      </div>
    </div>
  </div>
  )
}

//Export the Jumbotron
export default JumbotronEps;
