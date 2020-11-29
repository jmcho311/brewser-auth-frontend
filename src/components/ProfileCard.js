import React from 'react';
import { Component } from 'react';


class ProfileCard extends Component {

    removePost = () => {
        console.log(this.props.id)
        this.props.deletePost(this.props.id)
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
                <span className="remove" 
                onClick={ this.removePost }>
                    Remove
                </span>
            </div>
        )
    }
}

export default ProfileCard;

