import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BrewerySearchModel from '../models/brewerysearch'

class BeerShowCard extends Component {
    state = {
        brew: []
    }

    componentDidMount() {
        this.fetchBreweriesData()
    }

    fetchBreweriesData = () => {
        // console.log(this.props)
        BrewerySearchModel.show(this.props.breweryId).then(data => {
            this.setState({ brew: data })
        })
    }

    render() {
        return (
            <div>
                <h4>Beer Rating: { this.props.rating }/5</h4>
                <h4>Beer Style: { this.props.style }</h4>
                <p>Comment: { this.props.comment }</p>
                <Link to={`/brewery/${this.state.brew.id}`}>
                    <h3>{ this.state.brew.name }</h3>
                    <h3>{ this.state.brew.website_url}</h3>
                </Link>
            </div>
        );
    }
}

export default BeerShowCard;
