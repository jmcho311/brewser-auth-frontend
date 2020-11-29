import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import BeerModel from '../models/beer' 
import BrewerySearchModel from '../models/brewerysearch'

import BeerPost from '../components/BeerPost'
import './App.scss';


class BeerShow extends Component {
    state = {
        beerComments: [],
        currentBeer: this.props.match.params.name,
        brew: []
    }
    // console.log(this.props.name)

    componentDidMount() {
        this.fetchBeerData()
        this.fetchBreweriesData()
    }

    fetchBeerData = () => {
        // console.log(this.props.match.params.name)
        BeerModel.showBeer(this.state.currentBeer).then(data => {
            // console.log(data)
            this.setState({ beerComments: data.selectedBeer })
        })
    }

    fetchBreweriesData = () => {
        // console.log(this.props)
        BrewerySearchModel.show(299).then(data => {   //need to plug in breweryId in show() for each Brewery location
            console.log("need breweryId in show", data)
            this.setState({ brew: data })
        })
    }

    render() {
        let beerCommentsList = this.state.beerComments && this.state.beerComments.map((beercomments, index) => {
            // console.log(beercomments)
            return (
                <BeerPost {...beercomments} key={index} />
            )
        })

        return (
            <div>
                <h1>Beer Show Page for selected Beer</h1>
                { this.state.beerComments ? beerCommentsList : 'Loading...'}
                <Link to={`/brewery/${this.state.brew.id}`}>
                    <h3>{ this.state.brew.name }</h3>
                    <h3>{ this.state.brew.website_url}</h3>
                </Link>
            </div>
        )
    }
}

export default BeerShow