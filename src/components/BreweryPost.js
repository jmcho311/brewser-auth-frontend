// Comment Card!
import React from 'react';

const BreweryPost = (props) => {
    return (
        <div>
            <div className="breweryPost">
                <h5> { props.rating }/5</h5>
                <p>{ props.comment }</p>
        </div>
        </div>
    );
}

export default BreweryPost;

// BACKEND Brewery Model
// userId: DataTypes.INTEGER,
// breweryId: DataTypes.INTEGER,
// name: DataTypes.STRING,
// city: DataTypes.STRING,
// state: DataTypes.STRING,
// rating: DataTypes.INTEGER,
// comment: DataTypes.TEXT