// This is the beer search results page, searched by category.

import React, { Component } from 'react'
import BeerSearchModel from '../models/beer'
import BrewerySearchModel from '../models/brewerysearch';
import {Link} from 'react-router-dom'

import BeerPost from '../components/BeerPost'

class BeerList extends Component {
    state = {
        beers: [],
        // breweries: []
        // currentBeer: this.props.match.params.category
    }

    componentDidMount() {
        this.fetchData()
        // this.fetchBreweryData()
    }

    fetchData = () => {
        // console.log(this.setState)
        console.log(this.props.location.state.category)
        BeerSearchModel.all(this.props.location.state.category).then(data => {
            console.log(data)
            // console.log(this.state.beer)
            this.setState({ beers: data.beers })
        })
    }

    // fetchBreweryData = () => {
    //     BrewerySearchModel.all(this.props.id).then(data => {
    //         console.log(this.props.id)
    //         this.setState({ brewery: data })
    //     })
    // }

    render() {
        let beerList = this.state.beers && this.state.beers.map((beer, index) => {
            return (
                // <Link to={`/brewery/${breweryId}`} key={index}>
                    <BeerPost {...beer} key={index}/>
                // </Link>
            )
        })
        return (
            <div>
                <h3>Your Beer Search Results</h3>
                { this.state.beers ? beerList: 'Loading..'}
            </div>
        )
    }
}

export default BeerList;
