import React, { Component } from 'react'
import './ReviewForm.scss'

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
        this.props.onClose()
    }

    render() {
        if(!this.props.beerShow) {
            return null
        }

        return (
            <div className="beerModal">
                <div>
                    <button className="closeButton" onClick={ this.props.onClose }>
                        Close
                    </button>
                </div>
                <h3>Log a Beer</h3>
                <div className="reviewInputs">
                    <form onSubmit={ this.handleSubmit }>
                        <label>Beer Name: </label>
                        <input
                            name="name"
                            placeholder="Beer Name"
                            type="text"
                            onChange={ (e) => {
                                this.setState({ name: e.target.value })
                            }}
                            value={this.state.name}
                        />
                        <br />
                        <label>Category: </label>
                        <select
                            name="category"
                            placeholder="category"
                            type="text"
                            onChange={ (e) => {
                                this.setState({ category: e.target.value })
                            }}
                            value={ this.state.category }
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
                        <br />
                        <label>Style: </label>
                        <input
                            name="style"
                            placeholder="style"
                            type="text"
                            onChange={ (e) => {
                                this.setState({ style: e.target.value })
                            }}
                            value={ this.state.style }
                        />
                        <br />
                        <label>Rating: </label>
                        <select                         
                            name="rating"
                            placeholder="Beer Rating"
                            type="integer"
                            onChange={ (e) => {
                                this.setState({ rating: e.target.value })
                            }}
                            value={ this.state.rating }
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <span>/5</span>
                        <br />
                        <label>Comment: </label>
                        <br />
                        <textarea className="commentInput"
                            name="comment"
                            placeholder="leave a comment"
                            type="text"
                            onChange={ (e) => {
                                this.setState({ comment: e.target.value })
                            }}
                            value={ this.state.comment }
                        />
                        <br />
                        <button className="submitBtn">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default BeerReviewForm