import React, { Component } from 'react';
import './ReviewForm.scss';

class BeerReviewForm extends Component {
    state = {
        name: '',
        category: '',
        style: '',
        rating: '',
        comment: ''
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createBeerPost(
            this.state.name,
            this.state.category,
            this.state.style,
            this.state.rating,
            this.state.comment
        )
    }

    render() {
        if(!this.props.beerShow) {
            return null
        }

        return (
            <div className="reviewModal">
                <div>
                    <button className="closeButton" onClick={this.props.onClose}>
                        Close
                    </button>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="name"
                        placeholder="Beer Name"
                        type="text"
                        onChange={ (e) => {
                            this.setState({ name: e.target.value})
                        }}
                        value={this.state.name}
                    />
                    <label>Category:</label>
                    <select
                        name="category"
                        placeholder="category"
                        type="text"
                        onChange={ (e) => {
                            this.setState({ category: e.target.value })
                        }}
                        value={this.state.category}
                    >
                        <option value="Ale">Ale</option>
                        <option value="Belgian">Belgian</option>
                        <option value="Cider">Cider</option>
                        <option value="IPA">IPA</option>
                        <option value="Lager">Lager</option>
                        <option value="Pilsner">Pilsner</option>
                        <option value="Porter">Porter</option>
                        <option value="Stout">Stout</option>
                        <option value="Wheat">Wheat</option>
                    </select>
                    <input
                        name="style"
                        placeholder="style"
                        type="text"
                        onChange={ (e) => {
                            this.setState({ style: e.target.value })
                        }}
                        value={this.state.style}
                    />
                    <label>Rating</label>
                    <select
                        name="rating"
                        placeholder="Beer Rating"
                        type="integer"
                        onChange={ (e) => {
                            this.setState({ rating: e.target.value})
                        }}
                        value={this.state.rating}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input
                        name="comment"
                        placeholder="Comment"
                        type="text"
                        onChange={ (e) => {
                            this.setState({ comment: e.target.value})
                        }}
                        value={this.state.comment}
                    />
                    <button onClick={this.props.onClose}>Submit</button>
                </form>
            </div>
        );
    }
}

export default BeerReviewForm;

// Beer Model
// userId: DataTypes.INTEGER,
// breweryId: DataTypes.INTEGER,

// beername: DataTypes.STRING,
// category: DataTypes.STRING,
// style: DataTypes.STRING,
// beerrating: DataTypes.INTEGER,
// beercomment: DataTypes.TEXT