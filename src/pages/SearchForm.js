import React, { Component } from 'react';
import './App.scss';
import HomeModal from '../components/HomeModal';

class SearchForm extends Component {
    state = {
        breweries: [],
        city: '',
        show: true,
    }

    componentDidMount() {
        // We want modal pop up if user has NOT set their age or is not 21.
        let show = !JSON.parse(localStorage.getItem('legal'))
        this.setState({ show })
    }

    searchBreweries = (event) => {
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

    searchBeers = (event) => {
        event.preventDefault()
            this.props.history.push({
                pathname: '/beerList',
                state: this.state
            })
    }

    handleBeerChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    showModal = e => {
        console.log('close modal')
        this.setState({
            show: false
        });
    };

    onClose = e => {
        this.props.show = false;
    };

    render() {

        return (
            <div className="home">

                <HomeModal 
                    show={ this.state.show } 
                    onClose={ this.showModal }
                />

                <div className="Page">
                    <h1>Happy Brewsing!</h1>
                    <img src="https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" id="searchImg" alt="pic" />
                    <h4>Find breweries by name or location!</h4>
                    <div className="formBlock">
                        <form onSubmit={ this.searchBreweries }>
                            <input 
                                id="searchbar"
                                type="text"
                                placeholder="Find Brewery"
                                onChange={ this.handleChange }
                                value={ this.state.city }
                            />
                                <button id="searchBtn"> I need a drink! </button>
                        </form>

                        {/* <form onSubmit={ this.searchBeers }>
                            <input 
                            id="searchbar"
                            type="text"
                            placeholder="Find Beer"
                            onChange={ this.handleBeerChange }
                            value={ this.state.category }
                            /> */}

                        <form onSubmit={ this.searchBeers }>
                            <select 
                                value={ this.state.category } 
                                onChange={ this.handleBeerChange }
                                id="selectBar"
                            >
                                <option value="--">Select Beer By Category</option>
                                <option value="Ale">Ale</option>
                                <option value="Belgian">Belgian</option>
                                <option value="Cider">Cider</option>
                                <option value="IPA">IPA</option>
                                <option value="Lager">Lager</option>
                                <option value="Pilsner">Pilsner</option>
                                <option value="Porter">Porter</option>
                                <option value="Stout">Stout</option>
                                <option value="Wheat">Wheat</option>
                            </select>
                            <button id="searchBtn"> Pour me a pint! </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default SearchForm;