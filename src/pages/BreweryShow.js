import React, { Component } from 'react'
import BrewerySearchModel from '../models/brewerysearch'
import Brewery from '../models/brewery'

import BreweryCard from '../components/BreweryCard'

class BreweryShow extends Component {
    state = {
        breweryInfo: {},
        breweryComments: {},
        currentBrewery: this.props.match.params.id
    }

    componentDidMount() {
        this.fetchApiData()
        this.fetchCommentData()
    }

    fetchApiData = () => {
        BrewerySearchModel.show(this.state.currentBrewery).then(data => {
            console.log(data)
            this.setState({ breweryInfo: data })
        })
    }

    fetchCommentData = () => {
        Brewery.show(this.state.currentBrewery).then(data => {
            console.log(data)
            this.setState({ breweryComments: data})
    })
}

    render() {
        //console.log(this.state.currentBrewery)
        return (
            <div>
                <BreweryCard {...this.state.breweryInfo} />
                
            </div>
        )
    }
}

export default BreweryShow
