import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BrewerySearchModel from '../models/brewerysearch'

class BeerShowCard extends Component {
    state = {
        brew: []
    }

    componentDidMount() {
        this.fetchBreweriesData()
    }

    fetchBreweriesData = () => {
        BrewerySearchModel.show(this.props.breweryId).then(data => {
            this.setState({ brew: data })
        })
    }

    render() {
        return (
            <div>
                <div className="beerComments">
                    <h4>{ this.props.rating }/5</h4>
                    <p>{ this.props.comment }</p>
                </div>
                
                <h5>Located at:</h5>
                <h3>{ this.state.brew.name }</h3>
                <Link to={ `/brewery/${ this.state.brew.id }` }>See Details</Link>
            </div>
        )
    }
}

export default BeerShowCard
