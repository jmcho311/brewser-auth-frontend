import React, {Component} from 'react';

class BreweryReviewForm extends Component {

    state = {
        breweryId: this.props.brewery.id,
        name: this.props.brewery.name,
        city: this.props.brewery.city,
        state: this.props.brewery.state,
        rating: 0,
        comment: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            // breweryId: e.target.breweryId.value,
            // name: e.target.name.value,
            // city: e.target.city.value,
            // state: e.target.state.value,
            rating: e.target.rating.value,
            comment: e.target.comment.value,
        })
        console.log(this.state.rating)
        this.props.createPost(
            this.state.breweryId, 
            this.state.name,
            this.state.city,
            this.state.state,
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
