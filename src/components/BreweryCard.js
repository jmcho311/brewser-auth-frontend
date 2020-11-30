import React from 'react'

const BreweryCard = (props) => {
    return (
        <div>
            <h3 className="breweryName"> { props.name } </h3>
            <h5 className="type"> Type: { props.brewery_type } </h5>
            <div className="address">
                <h5> { props.street } </h5>
                <h5> { props.city }, { props.state } </h5>
            </div>
            <h5>Phone: { props.phone } </h5>
            <h5>
                <a className="site"
                    target="new"
                    href={ `${ props.website_url }` }> { props.website_url } 
                </a>
            </h5>
        </div>
    )
}

export default BreweryCard
