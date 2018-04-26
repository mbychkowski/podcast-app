import React from 'react';
import Pill from './Pill'

const PodcastCard = props => {
    return(
        <div>
        {props.results.map(genre => (
            <div classNameName="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p className="text-grey-darker text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 py-4">
                    
                    {/* Adding a Pill for each genre */}

                    {/* Need to pass a prop as a result of this */}
                    <Pill />


                </div>
            </div>
        ))}
        {/* Go through each result and return a podcast card for each result */}
            

        </div>
        
    )
}

export default PodcastCard