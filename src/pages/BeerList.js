// This is the beer search results page, searched by category.

import React, { Component } from 'react'
import BeerSearchModel from '../models/beer'
import BrewerySearchModel from '../models/brewerysearch'
import {Link} from 'react-router-dom'

import BeerPost from '../components/BeerPost'

class BeerList extends Component {
    state = {
        beers: [],
        // breweries: []
    }

    componentDidMount() {
        this.fetchData()
        this.fetchBreweryData()
    }

    fetchData = () => {
        // console.log(this.setState)
        console.log(this.props.location.state.category)
        BeerSearchModel.show(this.props.location.state.category).then(data => {
            console.log(data)
            // console.log(this.state.beer)
            this.setState({ beers: data.beers })
        })
    }

    fetchBreweryData = () => {
        BrewerySearchModel.all().then(data => {
            this.setState({ brewery: data })
        })
    }


    render() {
        let beerList = this.state.beers && this.state.beers.map((beer, index) => {
            console.log(beer) 
            return (
                <Link to={`/brewery/${beer.breweryId}`} key={index}>
                    <BeerPost {...beer} key={index}/>
                </Link>
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
