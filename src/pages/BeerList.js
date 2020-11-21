// This is the beer search results page, searched by category.

import React, { Component } from 'react'
import BeerSearchModel from '../models/beer'
import {Link} from 'react-router-dom'

import BeerPost from '../components/BeerPost'

class BeerList extends Component {
    state = {
        beers: []
        // currentBeer: this.props.match.params.category
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        BeerSearchModel.all().then(data => {
            console.log(data)
            // console.log(this.state.beer)
            this.setState({ beers: data })
        })
    }

    render() {
        let beerList = this.state.beers && this.state.beers.map((beer, index) => {
            return (
                <Link to={`/beer/${beer.id}`} key={index}>
                    <BeerPost {...beer} />
                </Link>
            )
        })
        return (
            <div>
                <h3>Your Beer Search Results</h3>
                { this.state.beer ? beerList: 'Loading..'}
            </div>
        )
    }
}

export default BeerList;
