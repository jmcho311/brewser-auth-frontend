import React, { Component } from 'react'
import BrewerySearchModel from '../models/brewerysearch'
import Brewery from '../models/brewery'

import BreweryCard from '../components/BreweryCard'
import BreweryPost from '../components/BreweryPost'

class BreweryShow extends Component {
    state = {
        breweryInfo: {},
        breweryComments: [],
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
            this.setState({ breweryComments: data.brewery})
        })
    }

    render() {
        console.log(this.state.breweryComments)
        let breweryCommentList = this.state.breweryComments && this.state.breweryComments.map((comment,index) => {
            return (
                <BreweryPost {...comment} key={index}/>
            )
        })
        return (
            <div>
                <BreweryCard {...this.state.breweryInfo} />
                <h3>Posts left by others:</h3>
                { this.state.breweryComments ? breweryCommentList : 'Loading..'}
            </div>
        )
    }
}

export default BreweryShow
