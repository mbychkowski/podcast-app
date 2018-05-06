import React from "react";
import "./EpisodeList.css"

// RecipeList renders a bootstrap list item
export const EpisodeList = props =>
  <ul className="text-lg list-group">{props.children}</ul>;
