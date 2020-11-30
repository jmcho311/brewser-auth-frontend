import React from 'react'

const BreweryPost = (props) => {
    return (
        <div>
            <div className="breweryPost">
                <h5> { props.rating }/5</h5>
                <p>{ props.comment }</p>
            </div>
        </div>
    )
}

export default BreweryPost