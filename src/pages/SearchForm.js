import React, { Component } from 'react';

import BrewerySearchModel from '../models/brewerysearch';
import BreweryCard from '../components/BreweryCard';

// need to fetch from backend to use in search form
//   pull breweries based on location (city)
// import brewery list
//   redirect to brewery list once search is performed


class SearchForm extends Component {

    state = {
        breweries: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        BrewerySearchModel.all().then(data => {
            console.log(data)
            this.setState({ breweries: data})
        })
    }

    render() {
        let breweryList = this.state.breweries && this.state.breweries.map((brewery, index) => {
            return (
                <BreweryCard {...brewery} key={index}/>
            )
        })
        
        return (
            <div>
                <form>
                    <input 
                    type="text"
                    // value=""
                    placeholder="Where are you located?"
                    // onChange={}
                    />
                    <button>Beer Me!</button>
                </form>
            </div>
        )
    }
}

export default SearchForm;