import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BrewerySearchModel from '../models/brewerysearch'
import Brewery from '../models/brewery'
import BeerModel from '../models/beer' 
import './App.scss'
import BreweryCard from '../components/BreweryCard'
import BreweryPost from '../components/BreweryPost'
import BreweryReviewForm from '../components/BreweryReviewForm'
import BeerCard from '../components/BeerCard'
import BeerReviewForm from '../components/BeerReviewForm'

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
            // console.log(data)
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
            this.setState({ beerPosts: data.brewery})
        })
    }

    //functions for Brewery Review Post Modal
    showModal = e => {
        this.setState({
            show: !this.state.show,
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
        };
        Brewery.create(newPost).then((res) => {
            this.fetchCommentData();
        });
    };

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
                <div key={ index }>
                    <BeerCard { ...comment }/>
                    <Link to={ `/beer/${comment.name}` }>Read Beer Review</Link>
                </div>
            )
        })
        return (
            <div className="Page">
                <div className="showImgBlock">
                </div>
                <div className="breweryDeets">
                    <BreweryCard { ...this.state.breweryInfo } />
                </div>

                <div>
                    { this.state.currentUser ?
                    <>
                <div className="buttonContainer">
                <div className="reviewButtonContainer">
                    <h5> Have you visited this brewery? </h5>
                    <BreweryReviewForm onClose={this.showModal} show={this.state.show} createPost={this.createPost}/>
                    <button className="reviewButtons" onClick={e => {this.showModal()}}>Write a Review
                    </button>
                </div>
                <div className="reviewButtonContainer">
                    <h5> Did you have a beer at this brewery? </h5>
                    <BeerReviewForm onClose={this.showBeerModal} beerShow={this.state.beerShow} createBeerPost={this.createBeerPost}/>
                    <button className= "reviewButtons" onClick= {(e) => {this.showBeerModal()}}>Log a Beer
                    </button>
                </div>
                </div>
                </>
                :
                <>
                <p>Log in to write a review!</p>
                </>
                    }
                </div>
                    

                <h3>Posts left by others:</h3>
                
                <div className="brewReviews">
                    { this.state.breweryComments ? breweryCommentList : 'Loading..' }
                </div>

                <div className="beerReviews">
                    { this.state.beerPosts ? beerCommentList : 'Loading...' }
                </div>
            </div>
        )
    }
}

export default BreweryShow
