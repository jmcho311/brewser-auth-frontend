import React, { Component } from 'react'
import BeerModel from '../models/beer'

import BeerPost from '../components/BeerPost'

class BeerList extends Component {
    state = {
        beer: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        BeerModel.all().then(data => {
            console.log(data)
            this.setState({ beer: data })
        })
    }

    render() {
        let beerList = this.state.beer && this.state.beer.map((beer, index) => {
            return (
                <BeerPost {...beer} key={index}/>
            )
        })
        return (
            <div>
                <h3>Your Beer Search Results</h3>
                { this.state.beer ? beerList : 'Loading...' }
            </div>
        );
    }
}

export default BeerList;
