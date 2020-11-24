import React from 'react';

const ProfileCard = (props) => {
        return (
            <div className="ProfileCard">
                <h3> { props.state } </h3>
                <h3 className="breweryName"> { props.name } </h3>
                <h5> { props.city } </h5>
                <h5>
                    <a className="site"
                        target="new"
                        href={ `${props.website_url}` }> {props.website_url} 
                    </a>
                </h5>
                <h5>{ props.rating }/5</h5>
                <p>{ props.comment }</p>
                <form onSubmit={ this.handleSubmit} >
                    <input 
                        name = "rating"
                        placeholder="rating"
                        type="integer"
                        onChange={ (e) => {
                            this.setState({ rating:e.target.value})
                        }}
                        value={this.state.rating}
                    />
                    <input 
                        name = "comment"
                        placeholder="comment"
                        type="text"
                        onChange={ (e) => {
                            this.setState({ rating:e.target.value})
                        }}
                        value={this.state.comment}
                    />
                </form>
            </div>
        )
    }


export default ProfileCard;

