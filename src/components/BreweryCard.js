import React from 'react';

const BreweryCard = (props) => {
    return (
        <div className="BreweryCard">
            <h3 className="breweryName"> { props.name } </h3>
            <h5 className="type"> { props.brewery_type } </h5>
            <h5> { props.street } </h5>
            <h5> { props.city }, { props.state } </h5>
            <h5>Phone: { props.phone } </h5>
            <h5>
                <a className="site"
                    target="new"
                    href={ `${props.website_url}` }> {props.website_url} 
                </a>
            </h5> 
            <p>{ props.comment }</p>
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
