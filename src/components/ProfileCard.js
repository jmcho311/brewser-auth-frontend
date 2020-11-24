import React from 'react';

const ProfileCard = (props) => {
    
    const removePost = () => {
        props.deletePost(props.comment)
    }
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
                <span className="remove" 
                onClick={ removePost }>
                    Remove
                </span>
            </div>
        )
    }


export default ProfileCard;

