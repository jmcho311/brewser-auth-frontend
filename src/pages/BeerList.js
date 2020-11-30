// This is the beer search results page, searched by category.
import React, { Component } from 'react'
import BeerModel from '../models/beer'

import BeerListCard from '../components/BeerListCard'

import './App.scss'

class BeerList extends Component {
    state = {
        beers: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        BeerModel.show(this.props.location.state.category).then(data => {
            this.setState({ beers: data.beers })
        })
    }

    render() {
        let beerList = this.state.beers && this.state.beers.map((beer, index) => {
            return (
                <div key={ index } className="BeerCard">
                    <BeerListCard { ...beer }/>
                </div>
            )
        })

        return (
            <div className="Page BeerList">
                <h1>Search Results for { this.props.location.state.category }</h1>

                <div className="BeerCardContainer">
                    <div id="beerinfo">
                        { this.state.beers ? beerList : 'Loading..' }
                    </div>
                </div>
            </div>
        )
    }
}

export default BeerList