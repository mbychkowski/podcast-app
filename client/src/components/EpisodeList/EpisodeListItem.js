import React from "react";

export const EpisodeListItem = props => (
  <li>
    <div>
      <p className="font-bold text-xl mb-2">{props.title}
        <span>
          <audio controls>
            <source src={props.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
          </audio>
        </span>
      </p>
    </div>
  </li>
)
