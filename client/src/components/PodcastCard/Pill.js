import React from "react";

const Pill = props => {
    return(
        <div>
            
            {/* Loop through each genre and display a pill */}
            {props.genres.map((genre, index) => (
                <span 
                key = {index}
                className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{genre}</span>
            ))}
            
        </div>
    )   
}

export default Pill;

