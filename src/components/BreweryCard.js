import React from 'react';
//import './BreweryCard.scss'

const BreweryCard = (props) => {
    return (
        <div className="BreweryCard">
            <div>
                <h3>{ props.name }</h3>
                <h5>{ props.city }, { props.state }</h5>
                {/* <h5>{ props.rating }/5</h5>
                <p> { props.comment } </p> */}
            </div>
        </div>
    );
}

export default BreweryCard;
