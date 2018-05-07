import React from "react";
import "./EpisodeList.css"

// RecipeList renders a bootstrap list item
export const EpisodeList = props =>
  //
  // handleListItem{
  //   li.setState: inactive
  // }
  //
  // inactive = () => {
  //   <
  // }

  <ul className="text-lg flex-1 list-group">{props.children}</ul>;
