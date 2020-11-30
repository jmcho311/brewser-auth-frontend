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
                <h4>Comment: { this.props.comment }</h4>
                
                <h4>Locations to Find Me?</h4>
                <h3>{ this.state.brew.name }</h3>
                <Link to={`/brewery/${this.state.brew.id}`}>(See Brewery Details)</Link>
                <h4>
                    <a className="site"
                        target="new"
                        href={ `${this.state.brew.website_url}`}>{this.state.brew.website_url}
                    </a>
                </h4>
            </div>
        );
    }
}

export default BeerShowCard;
