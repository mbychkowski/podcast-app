import React from "react";
import "./EpisodeList.css"

// RecipeList renders a bootstrap list item
const EpisodeList = props => {
  return(<ul className="list-group">{props.children}</ul>)
}

export default EpisodeList
