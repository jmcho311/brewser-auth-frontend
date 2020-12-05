import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BreweryModel from '../models/brewery'

class ProfileBreweryCard extends Component {
    state = {
        rating: '',
        comment: '',
        id: this.props.id
    }
    
    removePost = () => {
        this.props.deleteBreweryPost(this.props.id)
    }

    editBreweryPost = () => {
        const brewPost = {
            rating: this.state.rating,
            comment: this.state.comment,
            id: this.state.id
        }
        // const isUpdatedBreweryPost = b => {
        //     return b.id === brewPost.id
        // }
    
        BreweryModel.edit(brewPost).then((res) => {
            // let breweryPost = this.state.breweryComments
            // breweryPost.find(isUpdatedBreweryPost).body = brewPost.body
            // this.setState({breweryPost})
            console.log(res)
            this.props.fetchData()
            })
        }

    onRatingChange = (e) => {
        this.setState({
            rating: e.target.value
        })
    }

    onCommentChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        // let rating = this.props.rating
        // rating.body = this.state.rating     //cannot create property 'body'
        this.editBreweryPost()
        // this.props.editBreweryPost(rating)
        this.setState({ rating: ''})

        // let comment = this.props.comment
        // comment.body = this.state.comment  //cannot create property 'body'
        // this.editBreweryPost(this.state.comment)
        // this.props.editBreweryPost(comment)
        this.setState({ comment: ''})
    }

    render() {
        return (
            <div className="ProfileCard">
                <h3 className="breweryName"> { this.props.name } </h3>
                <h5> { this.props.city } </h5>
                <h5>
                    <a className="site"
                        target="new"
                        href={ `${this.props.website_url}` }> { this.props.website_url } 
                    </a>
                </h5>
                <h5>{ this.props.rating }/5</h5>
                {/* <h5>{ this.state.rating }/5</h5> */}
                <p>{ this.props.comment }</p>
                {/* <p>{ this.state.comment }</p> */}
                
                <form onSubmit={ this.onSubmit }>
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
                </form>

                <div className="breweryLinks">
                    <Link to={ `/brewery/${ this.props.breweryId }` }>See Details</Link>
                    <span className="link" onClick={ this.removePost }>
                        Remove
                    </span>
                </div>
            </div>
        )
    }
}


export default ProfileBreweryCard

