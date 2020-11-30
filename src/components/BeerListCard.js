import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BrewerySearchModel from '../models/brewerysearch'


class BeerListCard extends Component {
    state = {
        breweries: []
    }

    componentDidMount() {
        this.fetchBreweryData()
    }

    fetchBreweryData = (props) => {
        BrewerySearchModel.show(this.props.breweryId).then(data => {
            this.setState({ breweries: data })
        })
    }

    render() {
        return (
            <div>
                <h2 id="beerName">{ this.props.name }</h2>
                <Link to={ `/beer/${ this.props.name }` } className="seeMoreButton">Read Beer Reviews</Link>

                <h5 id="breweryName">{ this.state.breweries.name }</h5>                
                <h6 id="breweryWebsite">
                    <a className="site"
                        target="new"
                        href={ `${ this.state.breweries.website_url }`}>{ this.state.breweries.website_url }
                    </a>
                </h6>
                <Link to={ `/brewery/${ this.props.breweryId }` } className="seeMoreButton">See Brewery Details</Link>
            </div>
        )
    }
}

export default BeerListCard
