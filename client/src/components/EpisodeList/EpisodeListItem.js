import React from "react";

export const EpisodeListItem = props => (
  <li>
    <div>
      <h3 className="font-bold text-xl mb-2">{props.title}</h3>
      <audio controls>
        <source src={props.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
      </audio>
    </div>
  </li>
)
