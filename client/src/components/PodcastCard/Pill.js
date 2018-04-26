import React from "react";

const Pill = props => {
    return(
        <div>
            
            {/* Loop through each genre and display a pill */}
            {props.results.map(genre => (
                <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{genre.category}</span>
            ))}
            
        </div>
    )   
}

export default Pill;

