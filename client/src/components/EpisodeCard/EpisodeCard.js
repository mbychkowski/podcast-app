import React from 'react';

const EpisodeCard = props => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={props.thumbnail} alt={props.albumThumbnail}></img>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{props.artist}</div>
        <p class="text-grey-darker text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </div>
  )
}
