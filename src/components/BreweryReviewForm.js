import React, {Component} from 'react';
import './ReviewForm.scss';

class BreweryReviewForm extends Component {

    state = {
        rating: '',
        comment: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createPost(
            this.state.rating, 
            this.state.comment,
            )
        this.props.onClose()
    }

    render () {
        if(!this.props.show) {
            return null
        }

    return (
        <div className="reviewModal">
            <div>
                <button onClick={this.props.onClose} className="closeButton">
                    Close
                </button>
            </div>

            <form onSubmit={ this.handleSubmit }>
                <label>Rating: </label>
                <select
                // rating - user input
                    name = "rating"
                    placeholder="rating"
                    type="integer"
                    onChange={ (e) => {
                        this.setState({ rating: e.target.value })
                    }}
                    value= {this.state.rating}
                />
                <select
                >
                    <option value="1">1/5</option>
                    <option value="2">2/5</option>
                    <option value="3">3/5</option>
                    <option value="4">4/5</option>
                    <option value="5">5/5</option>
                </select>
                <textarea className="commentInput"
                // comment - user input
                    name = "comment"
                    placeholder="comment"
                    type="text"
                    onChange={ (e) => {
                        this.setState({ comment: e.target.value })
                    }}
                    value= {this.state.comment}
                />
                <button
                > 
                Submit 
                </button>
            </form>
        </div>
    );
}
}

export default BreweryReviewForm;

// Brewery Model
// userId: DataTypes.INTEGER,
// breweryId: DataTypes.INTEGER,
// name: DataTypes.STRING,
// city: DataTypes.STRING,
// state: DataTypes.STRING,
// rating: DataTypes.INTEGER,
// comment: DataTypes.TEXT
