import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BrewerySearchModel from '../models/brewerysearch'
// import BeerCard from './BeerCard'

function BeerListCard({beer}) {
    const [brewery, setBrewery] = useState({})

    useEffect(() => {
        if(beer) {
            fetchBreweryData()
        }
    }, [beer])

    const fetchBreweryData = () => {
        // console.log(this.state.beers)
        // console.log(this.props)
        // console.log(beer)
        // console.log(brewery)
        BrewerySearchModel.show(beer.breweryId).then(data => {   //need to plug in breweryId in show() for each BeerCard
            // console.log("hard coded, need to change", data)
            setBrewery(data)
        })
    }

    if(!beer) {
        return null
    }

    return (
            <div>
                <h1>TESTING!</h1>
                <Link to={`/beer/${beer.name}`}>
                    {/* <BeerCard {...beer} /> */}
                    <h2>Beer Name: { beer.name }</h2>
                    <h4>Beer Category: { beer.category }</h4>
                    {/* <h3>{ beer.breweryId }</h3> */}
                </Link>
                <Link to={`/brewery/${beer.breweryId}`}>
                    <h3>{ brewery.name }</h3>
                    <h3>{ brewery.website_url }</h3>
                </Link>
            </div>
    )
}

export default BeerListCard
