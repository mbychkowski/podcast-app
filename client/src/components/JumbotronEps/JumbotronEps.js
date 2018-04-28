import React from "react";

const JumbotronEps = props => {
  return(
      <div className="flex justify-center jumbotron w-full">
        <div className="justify-center">
          <img src={props.image} alt="No Image"/>
        </div>
      </div>
  )
}

//Export the Jumbotron
export default JumbotronEps;
