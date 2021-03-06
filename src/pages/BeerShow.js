import React, { Component } from 'react'
import BeerModel from '../models/beer' 

import BeerShowCard from '../components/BeerShowCard'
import './App.scss'

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
            return (
                <div key={ index }>
                    <BeerShowCard { ...beercomments }/>
                </div>
            )
        })

        return (
            <div className="Page BeerShow">
                <div className="beerShowImgBlock"></div>

                <div className="beerInfo">
                <h1>{ this.state.currentBeer }</h1>
                <h3>Beer Category: { this.state.beerComments[0] ? this.state.beerComments[0].category : null }</h3>
                </div>

                <h4> See What People Are Saying </h4>
                { this.state.beerComments ? beerCommentsList : 'Loading...'}
            </div>
        )
    }
}

export default BeerShow