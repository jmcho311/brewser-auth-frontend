import React, {Component} from 'react';

class BreweryReviewForm extends Component {

    state = {
        rating: '',
        comment: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('⭐️', this.state)
        this.props.createPost(
            this.state.rating, 
            this.state.comment,
            )
    }

    render () {
        if(!this.props.show) {
            return null
        }

    return (
        <div>
            <div>
                <button onClick={this.props.onClose}>
                    Close
                </button>
            </div>
            <form onSubmit={ this.handleSubmit }>
                <input
                // rating - user input
                    name = "rating"
                    placeholder="rating"
                    type="integer"
                    onChange={ (e) => {
                        this.setState({ rating: e.target.value })
                    }}
                    value= {this.state.rating}
                />
                <input
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
                    //onClick={this.props.onClose}
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
