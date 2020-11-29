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
                <Link to={`/beer/${this.props.name}`}>
                    <h2>Beer Name: { this.props.name }</h2>
                    <h4>Beer Category: { this.props.category }</h4>
                </Link>
                <Link to={`/brewery/${this.props.breweryId}`}>
                    <h3>{ this.state.breweries.name }</h3>
                    <h3>{ this.state.breweries.website_url }</h3>
                </Link>
            </div>
        );
    }
}

export default BeerListCard;
