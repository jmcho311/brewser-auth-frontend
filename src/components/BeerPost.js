import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BeerPost extends Component {
    removePost = () => {
        console.log("this might be a function soon")
        this.props.deleteBeerPost(this.props.id)

    }
    render () {
    return (
        <div className="BeerPost">
            <Link to={`/beer/${this.props.name}`}>
                <h2>Beer Name: { this.props.name }</h2>
            </Link>
            <h4>Beer Category: { this.props.category }</h4>
            <h4>Beer Rating: { this.props.rating }/5</h4>
            <h4>Beer Style: { this.props.style }</h4>
            <p>Comment: { this.props.comment }</p>
            <span className="remove" 
                onClick={ this.removePost }
                >
                    Remove
                </span>
        </div>
    )}
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