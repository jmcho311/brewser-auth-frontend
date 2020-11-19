// Comment Card!
import React from 'react';

const BreweryPost = (props) => {
    return (
        <div>
            <div className="Brewerypost">
                <h5>{ props.name }</h5>
                <h5>{ props.city },{ props.state }</h5>
                <h5>{ props.rating }/5</h5>
                <p>{ props.comment }</p>
        </div>
        </div>
    );
}

export default BreweryPost;
