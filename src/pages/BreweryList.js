import React, {Component} from 'react';
import BreweryCard from '../components/BreweryCard'
import BrewerySearchModel from '../models/brewerysearch'

class BreweryList extends Component {
    state = {
        breweries: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        BrewerySearchModel.all().then(data => {
            // console.log(data)
            this.setState({ breweries: data })
        })
    }

    render() {
        let breweryList = this.state.breweries && this.state.breweries.map((brewery, index) => {
            return (
                // <Link to={'/breweries/${  }'} key={index}>
                    <BreweryCard {...brewery} key={index}/>
                // </Link>
            )
        })
        return (
            <div>
                <h3>Your Search Results</h3>
                { this.state.breweries ? breweryList : 'Loading' }
            </div>
        )
    }

    // return (
    //     <div>
    //         <h2>Here's a list of breweries you have visited.</h2>
    //     </div>
    // )
}

export default BreweryList;