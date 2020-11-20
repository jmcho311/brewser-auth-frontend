import React, { Component } from 'react';
import Brewery from '../models/brewery'

import BreweryPost from '../components/BreweryPost'

class Profile extends Component {
  state = {
    breweryComments: [],
    currentUser: localStorage.getItem('id')
  }

  componentDidMount() {
    this.fetchCommentData()
  }

  fetchCommentData = () => {
    
    Brewery.showPost(this.state.currentUser).then(data => {
        console.log(data)
        this.setState({ breweryComments: data.user })
    })
  }

  render() {
    console.log(this.state.breweryComments)
    let breweryCommentList = this.state.breweryComments && this.state.breweryComments.map((comment,index) => {
        return (
            <BreweryPost {...comment} key={index}/>
        )
    })
    return (
      <div className="profile">
        <h1>Welcome to your Profile!</h1>
        <h2>Profile of user with ID { this.state.currentUser }</h2>
        { this.state.breweryComments ? breweryCommentList : 'Loading..'}
      </div>
    );
  }
}

export default Profile;