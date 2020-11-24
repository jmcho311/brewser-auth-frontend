import React, { Component } from 'react';

import Brewery from '../models/brewery';
import BeerModel from '../models/beer';
import BreweryCard from '../components/BreweryCard'
import BreweryPost from '../components/BreweryPost';
import BeerCard from '../components/BeerCard'
import BeerPost from '../components/BeerPost'
import ProfileCard from '../components/ProfileCard'
import './App.scss';

class Profile extends Component {
  state = {
    breweryComments: [],
    beerComments: [],
    currentUser: localStorage.getItem('id')
  }

  componentDidMount() {
    this.fetchCommentData()
    this.fetchBeerData()
  }

  fetchCommentData = () => {
    Brewery.showPost(this.state.currentUser).then(data => {
        // console.log(data)
        this.setState({ breweryComments: data.user })
    })
  }

  fetchBeerData = () => {
    BeerModel.showPost(this.state.currentUser).then(data => {
      // console.log(data)
      // debugger
      // console.log(data.user)
      this.setState({ beerComments: data.beer })
    })
  }

  deletePost = (comment) => {
    console.log('this is working')
    // Brewery.destroy(comment).then((res) => {
      // console.log(res)
    // }).then(
      // this.fetchCommentData()
    // )
  }

  render() {
    // console.log(this.state.beerComments)
    let breweryCommentList = this.state.breweryComments && this.state.breweryComments.map((comment,index) => {
      // console.log(this.state.breweryComments[0].state)
      // console.log(comment)
      // console.log(comment.state)
      return (
        <div key={index}>
          <ProfileCard deletePost={this.deletePost} {...comment} />
          {/* <BreweryCard {...comment} key={index}/> */}
          {/* <BreweryPost {...comment} key={index}/> */}
        </div>
      )
    })
    
    let beerCommentList = this.state.beerComments && this.state.beerComments.map((comment, index) => {
      // console.log(comment)
      return (
        <BeerPost {...comment} key={index} />
      )
    })

    return (
      <div className="profile">
        <h1 className="profileHead">Welcome to your Profile!</h1>
        <h2 className="profileSubhead"> User { this.state.currentUser } (Change to user name)</h2>
        {/* { this.state.breweryComments ? breweryCommentList : 'Loading..'}
        { this.state.beerComments ? beerCommentList : 'Loading...'} */}
        <div className="yourPosts">
          <div className="breweryContainer">
            <h3 id="breweryPosts">Your Brewery Check-ins</h3>
            { this.state.breweryComments ? breweryCommentList : 'Loading..'}
            <BreweryPost />
          </div>
          <div className="beerContainer">
            <h3 id="beerPosts">Your beer reviews</h3>
            { this.state.beerComments ? beerCommentList : 'Loading...'}
            <BeerPost />
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;