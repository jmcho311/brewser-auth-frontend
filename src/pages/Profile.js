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

  render() {
    // console.log(this.state.beerComments)
    let breweryCommentList = this.state.breweryComments && this.state.breweryComments.map((comment,index) => {
      // console.log(this.state.breweryComments[0].state)
      // console.log(comment)
      // console.log(comment.state)
      return (
        <div>
          <ProfileCard {...comment} key={index}/>
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
        <h1>Welcome to your Profile!</h1>
        <h2>Profile of user with ID { this.state.currentUser }</h2>
        { this.state.breweryComments ? breweryCommentList : 'Loading..'}
        { this.state.beerComments ? beerCommentList : 'Loading...'}
      </div>
    );
  }
}
export default Profile;