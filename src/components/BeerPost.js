import React from 'react'

const BeerPost = (props) => {
    return (
        <div className="BeerPost">
            <h2>Beer Name: { props.name }</h2>
            <h4>Beer Rating: { props.rating }/5</h4>
            <h4>Beer Category: { props.category }</h4>
            <h4>Beer Style: { props.style }</h4>
            <p>Comment: { props.comment }</p>
            {/* <p>{ props.createdAt }</p> */}
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