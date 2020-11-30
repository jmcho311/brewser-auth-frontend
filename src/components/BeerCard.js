import React from 'react'

const BeerCard = (props) => {
    return (
        <div>
            <h4>{ props.name }</h4>
            <h5>Category: { props.category }</h5>
        </div>
    )
}

export default BeerCard;

// BACKEND Beer Model
// userId: DataTypes.INTEGER,
// breweryId: DataTypes.INTEGER,
// name: DataTypes.STRING,
// category: DataTypes.STRING,
// style: DataTypes.STRING,
// rating: DataTypes.INTEGER,
// comment: DataTypes.TEXT