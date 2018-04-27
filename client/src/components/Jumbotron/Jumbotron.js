import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => {
    return(
        <div className="flex justify-center jumbotron w-full">
          <div className="justify-center">
            <img src={props.image} alt="No Image"/>
          </div>
        </div>
    )
}

//Export the Jumbotron
export default Jumbotron;
