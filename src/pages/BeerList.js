// This is the beer search results page, searched by category.

import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import BeerModel from '../models/beer'
// import BrewerySearchModel from '../models/brewerysearch'

// import BeerPost from '../components/BeerPost'
// import BeerCard from '../components/BeerCard'
import BeerListCard from '../components/BeerListCard'

class BeerList extends Component {
    state = {
        beers: [],
        // breweries: []
    }

    componentDidMount() {
        this.fetchData()
        // this.fetchBreweryData()
    }

    fetchData = () => {
        BeerModel.show(this.props.location.state.category).then(data => {
            // console.log(data)
            // console.log(this.state.beers)
            this.setState({ beers: data.beers })
        })
        // console.log(this.state.beers)
    }

    // fetchBreweryData = () => {
    //     // console.log(beer)
    //     BrewerySearchModel.show(299).then(data => {   //need to plug in breweryId in show() for each BeerCard
    //         console.log("hard coded, need to change", data)
    //         this.setState({ breweries: data })
    //     })
    // }


    render() {
        
        let beerList = this.state.beers && this.state.beers.map((beer, index) => {
            // console.log(beer.name)
            return (
                <div key={index}>
                    {/* <Link to={`/beer/${beer.name}`}>
                        <BeerCard {...beer} />
                        <h3>{ beer.breweryId }</h3>
                    </Link>
                    <Link to={ `/brewery/${beer.breweryId}` }>
                        <h3>{ this.state.breweries.name }</h3>
                        <h3>{ this.state.breweries.website_url }</h3>
                    </Link> */}
                    <BeerListCard {...beer}/>
                </div>
            )
        })

        return (
            <div className="Page BeerList">
                <h3>Search Results for:</h3>
                <h2>{ this.props.location.state.category }</h2>
                <div className="BeerCard">
                    { this.state.beers ? beerList : 'Loading..' }
                </div>
            </div>
        )
    }
}

export default BeerList;