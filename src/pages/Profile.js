import React, { Component } from 'react';

import Brewery from '../models/brewery';
import BeerModel from '../models/beer';
import UserModel from '../models/user';

import BeerPost from '../components/BeerPost';
import ProfileBreweryCard from '../components/ProfileBreweryCard';
import './App.scss';

class Profile extends Component {
  state = {
    breweryComments: [],
    beerComments: [],
    currentUser: localStorage.getItem('id'),
    user: []
  }

  componentDidMount() {
    this.fetchCommentData()
    this.fetchBeerData()
    this.fetchUserData()
  }

  fetchCommentData = () => {
    Brewery.showPost(this.state.currentUser).then(data => {
        this.setState({ breweryComments: data.user })
    })
  }

  fetchBeerData = () => {
    BeerModel.showPost(this.state.currentUser).then(data => {
      this.setState({ beerComments: data.beer })
    })
  }

  deleteBreweryPost = (breweryId) => {
    Brewery.delete(breweryId).then((res) => {
      this.fetchCommentData()
    })
  }

  deleteBeerPost = (beerId) => {
    BeerModel.delete(beerId).then((res) => {
      this.fetchBeerData()
    })
  }

  fetchUserData = () => {
    UserModel.index().then(data => {
      this.setState({ user: data.users[0].name })
    })
  }

  editBreweryPost = (brewPost) => {
    const isUpdatedBreweryPost = b => {
      return b._id === brewPost._id
    }

    Brewery.edit(brewPost).then((res) => {
      let breweryPost = this.state.breweryComments
      breweryPost.find(isUpdatedBreweryPost).body = brewPost.body
      this.setState({breweryPost})
    })
  }

  // editPost = (breweryId) => {
  //   let editedPost = {
  //     // breweryId: this.state.breweryInfo.id,
  //     // name: this.state.breweryInfo.name,
  //     // city: this.state.breweryInfo.city,
  //     // state: this.state.breweryInfo.state,
  //     rating: this.state.rating,
  //     comment: this.state.comment,
  //     // id: id
  //     // userId: localStorage.getItem('id')
  //   }
  //   console.log(rating)
  //   console.log(comment)
  //   Brewery.edit(breweryId).then((res) => {
  //     this.fetchCommentData()
  //     // let breweryComment = this.state.breweryComments
  //     // console.log(breweryComment)
  //     // breweryComment.find(editedPost).body = update.body
  //     // this.setState({breweryComments: breweryComment})
  //   })
  // }

  render() {
    console.log(this.state.breweryComments)
    let breweryCommentList = this.state.breweryComments && this.state.breweryComments.map((comment,index) => {
      return (
        <div key={ index }>
            <ProfileBreweryCard deleteBreweryPost={ this.deleteBreweryPost } editBreweryPost={ this.editBreweryPost } { ...comment } />
        </div>
      )
    })
    
    let beerCommentList = this.state.beerComments && this.state.beerComments.map((comment, index) => {
      return (
        <div key={ index }>
          <BeerPost deleteBeerPost={ this.deleteBeerPost } { ...comment }/>
        </div>
      )
    })

    return (
      <div className="Page Profile">
        <h1 className="profileHead">Welcome to your profile page, { this.state.user }!
        </h1>
        <h2>Total Brewery Reviews: { this.state.breweryComments.length }</h2>
        <h2>Total Beer Reviews: { this.state.beerComments.length }</h2>
        <div className="yourPosts">
          <div className="breweryContainer">
            <h3 id="breweryPosts">Your Brewery Check-ins</h3>
            { this.state.breweryComments ? breweryCommentList : 'Loading..' }
          </div>
          <div className="beerContainer">
            <h3 id="beerPosts">Your beer reviews</h3>
            { this.state.beerComments ? beerCommentList : 'Loading...' }
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
