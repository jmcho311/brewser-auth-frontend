import React, {Component} from 'react';

class BreweryReviewForm extends Component {

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
            <form >
                <input
                // userId - import from user model
                    //type="hidden"
                    placeholder={localStorage.getItem('id')}
                    value={localStorage.getItem('id')}
                    />
                <input
                // breweryId - import from brewerysearch model
                    // type="hidden"
                    value={this.props.brewery.id}
                    placeholder={this.props.brewery.id}
                />
                <input
                // name - import from brewerysearch model
                    //type="hidden"
                    value={this.props.brewery.name}
                    placeholder={this.props.brewery.name}
                />
                <input
                // city - import from brewerysearch model
                    // type="hidden"
                    value={this.props.brewery.city}
                    placeholder={this.props.brewery.city}
                />
                <input
                // state - import from brewerysearch model
                    // type="hidden"
                    value={this.props.brewery.state}
                    placeholder={this.props.brewery.state}
                />
                <input
                // rating - user input
                    placeholder="rating"
                    type="integer"
                />
                <input
                // comment - user input
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
