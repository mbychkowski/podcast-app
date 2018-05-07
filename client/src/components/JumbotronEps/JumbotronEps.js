import React from "react";
import "./JumbotronEps.css"

const JumbotronEps = props => {
  return (

      <div className="flex-initial mx-auto jumbotron flex w-full mb-4">
{/* image */}
        <div className="picInfo w-auto w-1/3">
          <img src={props.image} alt="No Image"/>
{/* author */}
          <h3 className="author text-2xl leading-normal float-right">{props.author}</h3>
        </div>
{/* info */}
        <div className="flex-grow text-lg w-1/3">
{/* title */}
          <h1 className=" podcastHeading float-none flex-auto leading-normal lg:leading-loose">{props.title}</h1>
{/* description */}
          <h3 className="description p-2 flex-w-full sm:overflow-y-scroll text-xlg">{props.description}</h3>
          {/* md:invisible w-3/3 lg:visible xl:visible leading-normal */}

        </div>

      </div>

      )
    }


//Export the Jumbotron
export default JumbotronEps;
