import React, { Component } from 'react';
import './App.scss';

// import BrewerySearchModel from '../models/brewerysearch';
// import BreweryCard from '../components/BreweryCard';

// need to fetch from backend to use in search form
//   pull breweries based on location (city)
// import brewery list
//   redirect to brewery list once search is performed


class SearchForm extends Component {

    state = {
        breweries: [],
        city: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
            this.props.history.push({ 
                pathname: '/brewerylist',
                state: this.state
            });
    };
    
    handleChange = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    render() {
        
        return (
            <div className="search">
                <h1>Happy Brewsing!</h1>
                <img src="https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" id="searchImg" alt="pic" />
                <h4>Find breweries by name or location!</h4>
                <form onSubmit={ this.handleSubmit }>
                    <input 
                    id="searchbar"
                    type="text"
                    placeholder="Find Beer"
                    onChange={ this.handleChange}
                    value={ this.state.city }
                    />
                    <button id="searchBtn"> Beer Me! </button>
                </form>
            </div>
        )
    }
}

export default SearchForm;