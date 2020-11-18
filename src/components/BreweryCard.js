import React from 'react';
//import './BreweryCard.scss'

const BreweryCard = (props) => {
    return (
        <div className="BreweryCard">
            <h3>{ props.name }</h3>
            <h5>{ props.city },{ props.state }</h5>
            {/* <h5>{ props.rating }/5</h5> */}
            {/* <p>{ props.comment }</p> */}
        </div>
    );
}

export default BreweryCard;

// BACKEND Brewery Model
// userId: DataTypes.INTEGER,
// breweryId: DataTypes.INTEGER,
// name: DataTypes.STRING,
// city: DataTypes.STRING,
// state: DataTypes.STRING,
// rating: DataTypes.INTEGER,
// comment: DataTypes.TEXT
