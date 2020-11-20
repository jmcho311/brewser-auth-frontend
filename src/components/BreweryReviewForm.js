import React from 'react';



const BreweryReviewForm = () => {
    return (
        <div>
            <form onSubmit={ this.handleSubmit }>
                <input
                // userId - import from user model
                    type="integer"
                    placeholder=""
                    />
                <input
                // breweryId - import from brewerysearch model
                    type="integer"
                />
                <input
                // name - import from brewerysearch model
                    type="text"
                    placeholder="Brewery Name"
                />
                <input
                // city - import from brewerysearch model
                    type="text"
                />
                <input
                // state - import from brewerysearch model
                    type="text"
                />
                <input
                // rating - user input
                    type="integer"
                />
                <input
                // comment - user input
                    type="text"
                />
                <button> Submit </button>
            </form>
        </div>
    );
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
