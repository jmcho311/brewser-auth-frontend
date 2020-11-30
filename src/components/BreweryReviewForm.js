import React, { Component } from 'react'
import './ReviewForm.scss'

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
                    <button onClick={ this.props.onClose } className="closeButton">
                        Close
                    </button>
                </div>
                <h3>Write a Review</h3>
                <div className="reviewInputs">
                    <form className="breweryReviewForm" onSubmit={ this.handleSubmit }>
                        <div className= "rating">
                            <label>Rating: </label>
                            <select                 
                                name = "rating"
                                placeholder="rating"
                                type="integer"
                                onChange={ (e) => {
                                    this.setState({ rating: e.target.value })
                                }}
                                value= { this.state.rating }
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <span>/5</span>
                        </div>
                        <br/>
                        <label>Comment:</label>
                        <br/>
                        <textarea className="commentInput"
                            name = "comment"
                            placeholder="leave a comment"
                            type="text"
                            onChange={ (e) => {
                                this.setState({ comment: e.target.value })
                            }}
                            value= { this.state.comment }
                        />
                        <br/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default BreweryReviewForm
