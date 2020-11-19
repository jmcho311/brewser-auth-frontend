import React, { Component } from 'react'
import BreweryModel from '../models/brewery'

import BreweryCard from '../components/BreweryCard'
import BreweryPost from '../components/BreweryPost'

class BreweryShow extends Component {
    state = {
        breweryInfo: {},
        breweryComments: [],
        currentBrewery: this.props.match.params.id
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        BreweryModel.show(this.state.currentBrewery).then(data => {
            this.setState({ brewery: data.brewery })
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
