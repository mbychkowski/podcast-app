import React from 'react';
import Pill from './Pill';
import "../PodcastList/PodcastList.css";

const PodcastCard = props => {
    return(
        <div className="podcastList w-1/4">
        {props.results.map(podcast => (
            <div key = {podcast.collectionId} className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={podcast.artworkUrl100} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{podcast.collectionName}</div>
                    <p className="text-grey-darker text-base">
                    {podcast.artistName}
                    </p>
                </div>
                <div className="px-6 py-4">
                    
                    {/* Adding a Pill for each genre */}

                    {/* Need to pass a prop as a result of this */}
                    <Pill 
                    genres = {podcast.genres}
                    />


                </div>
            </div>
        ))}
        {/* Go through each result and return a podcast card for each result */}
            

        </div>
        
    )
}

export default PodcastCard