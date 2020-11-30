//This is search results from API on backend

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BrewerySearchModel from '../models/brewerysearch'

import BreweryCard from '../components/BreweryCard'
import './App.scss'

class BreweryList extends Component {
    state = {
        breweries: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        BrewerySearchModel.all(this.props.location.state.city).then(data => {
            this.setState({ breweries: data })
        })
    }

    render() {
        let breweryList = this.state.breweries && this.state.breweries.map((brewery, index) => {
            return (
                    <div key={ index } className="BreweryCard">
                        <BreweryCard { ...brewery } />
                        <Link to={ `/brewery/${ brewery.id }` } className="seeMoreButton">Read More</Link>
                    </div>
            )
        })
        return (
            <div className="Page BreweryList">
                <h1>Search Results for '{ this.props.location.state.city }'</h1>
                
                <div className="breweryCardContainer">
                    <div className="breweryCard">
                        <div id="info">
                            { this.state.breweries ? breweryList : 'Loading..' }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BreweryList