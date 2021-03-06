import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BeerModel from '../models/beer' 
import Brewery from '../models/brewery'
import BrewerySearchModel from '../models/brewerysearch'

import BeerCard from '../components/BeerCard'
import BeerReviewForm from '../components/BeerReviewForm'
import BreweryCard from '../components/BreweryCard'
import BreweryPost from '../components/BreweryPost'
import BreweryReviewForm from '../components/BreweryReviewForm'
import './App.scss'

class BreweryShow extends Component {
    state = {
        breweryInfo: {},
        breweryComments: [],
        currentBrewery: this.props.match.params.id,
        beerPosts: [],
        beerReview: {},
        show: false,
        beerShow: false,
        currentUser: localStorage.getItem('id')
    }

    componentDidMount() {
        this.fetchApiData()
        this.fetchCommentData()
        this.fetchBeerData()
    }

    fetchApiData = () => {
        BrewerySearchModel.show(this.state.currentBrewery).then(data => {
            this.setState({ breweryInfo: data })
        })
    }

    fetchCommentData = () => {
        Brewery.show(this.state.currentBrewery).then(data => {
            this.setState({ breweryComments: data.brewery })
        })
    }
    
    fetchBeerData = () => {
        BeerModel.showBrewery(this.state.currentBrewery).then(data => {
            this.setState({ beerPosts: data.brewery })
        })
    }

    //functions for Brewery Review Post Modal
    showModal = e => {
        this.setState({
            show: !this.state.show
        })
    }

    showBeerModal = e => {
        this.setState({
            beerShow: !this.state.beerShow
        })
    }

    createPost = (rating, comment) => {
        let newPost = {
            breweryId: this.state.breweryInfo.id,
            name: this.state.breweryInfo.name,
            city: this.state.breweryInfo.city,
            state: this.state.breweryInfo.state,
            rating: rating,
            comment: comment,
            userId: localStorage.getItem('id')
        }
        Brewery.create(newPost).then((res) => {
            this.fetchCommentData()
        })
    }

    createBeerPost = (name, category, style, rating, comment) => {
        let newBeerPost = {
            userId: localStorage.getItem('id'),
            breweryId: this.state.breweryInfo.id,
            name: name,
            category: category,
            style: style,
            rating: rating,
            comment: comment
        }
        BeerModel.create(newBeerPost).then((res) => {
            this.fetchBeerData()
        })
    }

    render() {
        let breweryCommentList = this.state.breweryComments && this.state.breweryComments.map((comment,index) => {
            return (
                <BreweryPost { ...comment } key={ index }/>
            )
        })

        let beerCommentList = this.state.beerPosts && this.state.beerPosts.map((comment, index) => {
            return (
                <div className="BeerCard" key={ index }>
                        <BeerCard { ...comment }/>
                        <Link to={ `/beer/${ comment.name }` } className="seeMoreButton">See More</Link>
                </div>
            )
        })
        return (
            <div className="Page BreweryShow">
                <div className="showImgBlock"></div>
                <div className="breweryDeets">
                    <BreweryCard { ...this.state.breweryInfo } />
                </div>

                <div>
                    { this.state.currentUser ?
                    <>
                        <div className="buttonContainer">
                            <div className="reviewButtonContainer">
                                <h5>Have you visited this brewery?</h5>
                                <BreweryReviewForm onClose={ this.showModal } show={ this.state.show } createPost={ this.createPost }/>
                                <button className="reviewButtons" onClick={ e => { this.showModal() } }>Write a Review</button>
                            </div>
                            <div className="reviewButtonContainer">
                                <h5>Did you have a beer at this brewery?</h5>
                                <BeerReviewForm onClose={ this.showBeerModal } beerShow={ this.state.beerShow } createBeerPost={ this.createBeerPost }/>
                                <button className= "reviewButtons" onClick= { (e) => { this.showBeerModal() } }>Log a Beer</button>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <p>Log in to write a review!</p>
                    </>
                    }
                </div>

                <div className="postSection">
                    <h3>See What People Are Saying</h3>

                    <div className="userPosts">
                        <div className="brewReviews">
                            <h3> Reviews of this Brewery</h3>
                            { this.state.breweryComments ? breweryCommentList : 'Loading..' }
                        </div>

                        <div className="beerReviews">
                            <h3>Beers Logged By Users</h3>
                            { this.state.beerPosts ? beerCommentList : 'Loading...' }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BreweryShow
