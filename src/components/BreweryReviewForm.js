import React, {Component} from 'react';

class BreweryReviewForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.breweryId.value)
        console.log(e.target.name.value)
        console.log(e.target.city.value)
        console.log(e.target.state.value)
        console.log(e.target.rating.value)
        console.log(e.target.comment.value)
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
                // userId - import from user model
                    type="hidden"
                    name='userId'
                    value={localStorage.getItem('id')}
                    />
                <input
                // breweryId - import from brewerysearch model
                    type="hidden"
                    name = "breweryId"
                    value={this.props.brewery.id}
                />
                <input
                // name - import from brewerysearch model
                    type="hidden"
                    name = "name"
                    value={this.props.brewery.name}
                />
                <input
                // city - import from brewerysearch model
                    type="hidden"
                    name = "city"
                    value={this.props.brewery.city}
                />
                <input
                // state - import from brewerysearch model
                    type="hidden"
                    name = "state"
                    value={this.props.brewery.state}
                />
                <input
                // rating - user input
                    name = "rating"
                    placeholder="rating"
                    type="integer"
                />
                <input
                // comment - user input
                    name = "comment"
                    placeholder="comment"
                    type="text"
                />
                <button> Submit </button>
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
