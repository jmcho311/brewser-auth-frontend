import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// const ProfileBreweryCard = (props) => {
class ProfileBreweryCard extends Component {
    state = {
        rating: '',
        comment: '',
        id: this.props.id
    }
    
    removePost = () => {
        this.props.deleteBreweryPost(this.props.id)
    }

    // onRatingChange = (e) => {
    //     this.setState({
    //         rating: e.target.value
    //     })
    // }

    // onCommentChange = (e) => {
    //     this.setState({
    //         comment: e.target.value
    //     })
    // }

    // onSubmit = (e) => {
    //     e.preventDefault()
    //     // let rating = this.props.rating
    //     // rating.body = this.state.rating     //cannot create property 'body'
    //     this.props.editBreweryPost(this.state.rating)
    //     // this.props.editBreweryPost(rating)
    //     this.setState({ rating: ''})

    //     // let comment = this.props.comment
    //     // comment.body = this.state.comment  //cannot create property 'body'
    //     this.props.editBreweryPost(this.state.comment)
    //     // this.props.editBreweryPost(comment)
    //     this.setState({ comment: ''})
    // }

    render() {
        return (
            <div className="ProfileCard">
                {/* <h3> { this.props.state } </h3> */}
                <h3 className="breweryName"> { this.props.name } </h3>
                <h5> { this.props.city } </h5>
                <h5>
                    <a className="site"
                        target="new"
                        href={ `${this.props.website_url}` }> {this.props.website_url} 
                    </a>
                </h5>
                <h5>{ this.props.rating }/5</h5>
                <p>{ this.props.comment }</p>
                
                {/* <form onSubmit={ this.onSubmit }>
                    <input 
                        name="rating"
                        placeholder="Rating"
                        type="integer"
                        onChange={ this.onRatingChange }
                        value={this.state.rating}
                    />
                    <input 
                        name="comment"
                        placeholder="Comment"
                        type="text"
                        onChange={ this.onCommentChange }
                        value={this.state.comment}
                    />
                    <button>EDIT</button>
                </form> */}
                <div className="breweryLinks">
                    <Link to={`/brewery/${this.props.breweryId}`}>See Details</Link>
                    <span className="link" 
                    onClick={ this.removePost }>
                        Remove
                    </span>
                </div>
            </div>
        )
    }
}


export default ProfileBreweryCard;

