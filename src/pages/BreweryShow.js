import React, { Component } from 'react'
import BreweryModel from '../models/brewery'

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
        BreweryModel.show(this.state.currentBrewery).then(data => {
            this.setState({ brewery: data.brewery })
        })
    }

    render() {
        return (
            <div>
                <BreweryCard {...this.state.brewery} />
            </div>
        )
    }
}

export default BreweryShow
