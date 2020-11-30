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
            <h3>{ this.props.name }</h3>
            <span className="beerRating"><h4>Rating: </h4> { this.props.rating }/5</span>
            <div className="beerDetails">
                <h4>Category:</h4>{ this.props.category }
                <h4>Style: </h4>{ this.props.style }
            </div>
            <p> { this.props.comment }</p>
            <div className="beerLinks">
                <Link to={ `/beer/${this.props.name}` } className="link">See Details</Link>
                <span className="link" 
                    onClick={ this.removePost }
                    >
                        Remove
                    </span>
                </div>
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