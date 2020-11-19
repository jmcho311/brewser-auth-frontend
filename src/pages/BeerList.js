import React, { Component } from 'react'
import BeerModel from '../models/beer'
import {Link} from 'react-router-dom'

import BeerPost from '../components/BeerPost'

class BeerList extends Component {
    state = {
        beer: []
        // currentBeer: this.props.match.params.category
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        BeerModel.all().then(data => {
            console.log(data)
            console.log(this.state.beer)
            this.setState({ beer: data })
        })
    }

    render() {
        let beerList = this.state.beer && this.state.beer.map((beer, index) => {
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
