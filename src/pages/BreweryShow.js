import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import BrewerySearchModel from '../models/brewerysearch'
import Brewery from '../models/brewery'
import BeerSearchModel from '../models/beer'

import BreweryCard from '../components/BreweryCard'
import BreweryPost from '../components/BreweryPost'
import BreweryReviewForm from '../components/BreweryReviewForm'
import BeerPost from '../components/BeerPost'

class BreweryShow extends Component {
    state = {
        breweryInfo: {},
        breweryComments: [],
        currentBrewery: this.props.match.params.id,
        beers: [],
        show: false,
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
        // Brewery.showPost(this.state.currentBrewery).then(data => {
            console.log('-----------')
            console.log(data)
            this.setState({ breweryComments: data.brewery})
        })
    }
    //functions for Brewery Review Post Modal
    showModal = e => {
        this.setState({
            show: !this.state.show
        })
    }

    // createPost = (breweryId, name, city, state, rating, comment) => {
    createPost = () => {
        console.log('trying to create a post')
        let newPost = {
            breweryId: this.state.breweryId,
            name: this.state.name,
            city: this.state.city,
            state: this.state.state,
            rating: this.state.rating,
            comment: this.state.comment,
            userId: localStorage.getItem('id')
        };
        console.log(newPost)
        Brewery.create(newPost).then((res) => {
            let breweryComments = this.state.breweryComments;
            breweryComments.push(res.data);
            this.setState({ breweryComments:breweryComments });
        });
    };

    render() {
        let breweryCommentList = this.state.breweryComments && this.state.breweryComments.map((comment,index) => {
            return (
                <BreweryPost {...comment} key={index}/>
            )
        })
        return (
            <div className="show">
                <div className="breweryDeets">
                    <BreweryCard {...this.state.breweryInfo} />
                </div>
                <div>
                <BreweryReviewForm onClose={this.showModal} show={this.state.show} brewery={this.state.breweryInfo} createPost={this.createPost}/>
                <button onClick={e => {this.showModal()}}> Write a Review</button>
                </div>
                <h3>Posts left by others:</h3>
                <div className="brewReviews">
                    { this.state.breweryComments ? breweryCommentList : 'Loading..'}
                </div>
            </div>
        )
    }
}

export default BreweryShow
