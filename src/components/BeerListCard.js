import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BrewerySearchModel from '../models/brewerysearch'

class BeerListCard extends Component {
    state = {
        breweries: []
    }

    componentDidMount() {
        this.fetchBreweryData()
    }

    fetchBreweryData = (props) => {
        // console.log(this.props)
        BrewerySearchModel.show(this.props.breweryId).then(data => {   //need to plug in breweryId in show() for each BeerCard
            // console.log("hard coded, need to change", data)
            // console.log(data)
            this.setState({ breweries: data })
        })
    }

    render() {
        return (
            <div>
                <h2>{ this.props.name }</h2>
                <Link to={`/beer/${this.props.name}`}>Read Beer Reviews</Link>

                <h4>Locations to Find Me?</h4>
                <h3>{ this.state.breweries.name }</h3>
                <Link to={`/brewery/${this.props.breweryId}`}>(See Brewery Details)</Link>
                <h3>
                    <a className="site"
                        target="new"
                        href={ `${this.state.breweries.website_url}`}>{this.state.breweries.website_url}
                    </a>
                </h3>
            </div>
        );
    }
}

export default BeerListCard;
