import React from 'react'

const BeerPost = (props) => {
    return (
        <div className="BeerPost">
            <h3>Beer Name: { props.name }</h3>
            <h5>Beer Rating: { props.rating }/5</h5>
            <h5>Beer Category: { props.category }</h5>
            <h5>Beer Style: { props.style }</h5>
            <p>Comment: { props.comment }</p>
        </div>
    )
}

export default BeerPost;

// BACKEND Beer Model
// userId: DataTypes.INTEGER,
// breweryId: DataTypes.INTEGER,
// name: DataTypes.STRING,
// category: DataTypes.STRING,
// style: DataTypes.STRING,
// rating: DataTypes.INTEGER,
// comment: DataTypes.TEXT