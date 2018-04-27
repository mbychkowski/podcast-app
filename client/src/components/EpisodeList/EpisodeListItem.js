import React from "react";

export const EpisodeListItem = props => (
  <li>
    <img src={props.epsThumbnail}></img>
    <h3 className="font-bold text-xl mb-2">{props.title}</h3>
  </li>
)
