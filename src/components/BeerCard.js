import React from 'react'

const BeerCard = (props) => {
    return (
        <div>
            <h4>{ props.name }</h4>
            <h5>Category: { props.category }</h5>
        </div>
    )
}

export default BeerCard;