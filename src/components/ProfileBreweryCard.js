import React, { Component } from 'react';

// const ProfileBreweryCard = (props) => {
class ProfileBreweryCard extends Component {
    state = {
        rating: '',
        comment: '',
        id: this.props.id
    }
    
    removePost = () => {
        this.props.deletePost(this.props.comment)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.props.editPost(
            this.state.rating,
            this.state.comment,
            this.state.id
        )
    }

    render() {
        return (
            <div className="ProfileCard">
                <h3> { this.props.state } </h3>
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
                
                <form onSubmit={ this.handleSubmit }>
                    <input 
                        name="rating"
                        placeholder={ this.props.rating }
                        type="integer"
                        onChange={ (e) => {
                            this.setState({rating: e.target.value})
                        }}
                        value={this.state.rating}
                    />
                    <input 
                        name="comment"
                        placeholder={ this.props.comment }
                        type="text"
                        onChange={ (e) => {
                            this.setState({comment: e.target.value})
                        }}
                        value={this.state.comment}
                    />
                    <button>EDIT</button>
                </form>

                <span className="remove" 
                onClick={ this.removePost }>
                    Remove
                </span>
            </div>
        )
    }
}


export default ProfileBreweryCard;

