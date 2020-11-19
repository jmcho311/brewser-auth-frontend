import React, { Component } from 'react'
import BrewerySearchModel from '../models/brewery'

import BreweryCard from '../components/BreweryCard'

class BreweryShow extends Component {
    state = {
        brewery: {},
        currentBrewery: this.props.match.params.id
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        BrewerySearchModel.show(this.state.currentBrewery).then(data => {
            this.setState({ brewery: data.brewery })
        })
    }

    render() {
        console.log(this.state.currentBrewery)
        return (
            <div>
                <BreweryCard {...this.state.brewery} />
            </div>
        )
    }
}

export default BreweryShow
