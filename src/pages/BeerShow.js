import React, { Component } from 'react'

import BeerModel from '../models/beer' 

import BeerShowCard from '../components/BeerShowCard'
import './App.scss';


class BeerShow extends Component {
    state = {
        beerComments: [],
        currentBeer: this.props.match.params.name
    }

    componentDidMount() {
        this.fetchBeerData()
    }

    fetchBeerData = () => {
        BeerModel.showBeer(this.state.currentBeer).then(data => {
            this.setState({ beerComments: data.selectedBeer })
        })
    }

    render() {
        let beerCommentsList = this.state.beerComments && this.state.beerComments.map((beercomments, index) => {
            // console.log(beercomments)
            return (
                <div key={index}>
                    <h3>Beer Category: {beercomments.category}</h3>
                    <BeerShowCard {...beercomments}/>
                </div>
            )
        })
        // console.log(this.state.beerComments)
        // console.log(this.state.beerComments[0])
        // console.log(this.state.beerComments[0].category)

        return (
            <div className="Page">
                <h1>Beer Show Page for selected Beer</h1>
                <h3>Beer Name: { this.state.currentBeer }</h3>
                {/* <h3>Beer Category: { this.state.beerComments[0].category }</h3> */}
                { this.state.beerComments ? beerCommentsList : 'Loading...'}
            </div>
        )
    }
}

export default BeerShow