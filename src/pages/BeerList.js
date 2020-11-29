// This is the beer search results page, searched by category.

import React, { useState, useEffect } from 'react'
// import {Link} from 'react-router-dom'
import BeerModel from '../models/beer'
// import BrewerySearchModel from '../models/brewerysearch'

// import BeerPost from '../components/BeerPost'
// import BeerCard from '../components/BeerCard'
import BeerListCard from '../components/BeerListCard'


// class BeerList extends Component {
//     state = {
//         beers: [],
//         // breweries: []
//     }

function BeerList(beers) {
    const [beer, setBeer] = useState({})

    useEffect(() => {
        fetchData()
    }, [beers])

    const fetchData = () => {
        // console.log(this.setState)
        // console.log(this.props.location.state.category)
        // BeerModel.show(this.props.location.state.category).then(data => {
        // console.log(beers)
        // console.log(beers.location.state.category)
        BeerModel.show(beers.location.state.category).then(data => {
            console.log(data)
            // console.log(this.state.beer)
            // this.setState({ beers: data.beers })
            setBeer(data)
        })
    }   

    return (
        <div>
            <h3>Your Beer Search Results for:</h3>
            <h2>{ beers.location.state.category }</h2>
            {/* { this.state.beers ? beerList : 'Loading..'} */}
            <BeerListCard beer={beers} key={beer.id}/>
        </div>
    )
}

    // componentDidMount() {
    //     this.fetchData()
    //     // this.fetchBreweryData()
    // }

    // fetchData = () => {
    //     // console.log(this.setState)
    //     // console.log(this.props.location.state.category)
    //     BeerModel.show(this.props.location.state.category).then(data => {
    //         // console.log(data)
    //         // console.log(this.state.beer)
    //         this.setState({ beers: data.beers })
    //     })
    // }


    // render() {
        
    //     let beerList = this.state.beers && this.state.beers.map((beer) => {
    //         console.log(beer)
    //         // console.log(this.state.beers)
    //         return (
    //             <BeerListCard {...beer} key={beer.id}/>
    //         )
    //     })

//         return (
//             <div>
//                 <h3>Your Beer Search Results for:</h3>
//                 <h2>{ this.props.location.state.category }</h2>
//                 { this.state.beers ? beerList : 'Loading..'}
//                 {/* <BeerListCard key={beer.id}/> */}
//             </div>
//         )
//     }
// }

export default BeerList;
