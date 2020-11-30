//This is search results from API on backend

import React, { Component } from 'react';
import BreweryCard from '../components/BreweryCard';

import { Link } from 'react-router-dom';
import BrewerySearchModel from '../models/brewerysearch';

class BreweryList extends Component {
    state = {
        breweries: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        // console.log(this.props.location.state.city)
        BrewerySearchModel.all(this.props.location.state.city).then(data => {
            // console.log(data)
            this.setState({ breweries: data})
        })
    }

    render() {
        // console.log(this.props)
        console.log(this.props.location.state.city)
        let breweryList = this.state.breweries && this.state.breweries.map((brewery, index) => {
            return (
                <div key={index}>
                    <BreweryCard { ...brewery } />
                    <Link to={ `/brewery/${brewery.id}` }>Read More</Link>
                </div>
            )
        })
        return (
            <div className="Page">
                <h1>Search Results for '{this.props.location.state.city}'</h1>
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

export default BreweryList;