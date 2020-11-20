import React, { Component} from 'react';
import BreweryPost from '../components/BreweryPost'
import Brewery from '../models/brewery'


class Profile extends Component {
  state = {
    breweryComments : [],
    currentUser: localStorage.getItem('id')
  }

  componentDidMount() {
    this.fetchUserPosts()
  }

  fetchUserPosts = () => {
    console.log(this.state.currentUser)
    Brewery.showPost(this.state.currentUser).then(data => {
      this.setState({breweryComments: data.brewery})
    })
  }

  render() {
    let breweryCommentList = this.state.breweryComments && this.state.breweryComments.map((comment,index) => {
      return (
        <BreweryPost {...comment} key={index} />
      )
    })

    return (
      <div className="profile">
        <h1>Welcome to your Profile!</h1>
        <h2>Profile of user with ID { this.state.currentUser }</h2>
        { this.state.breweryComments ? breweryCommentList : 'Loading...'}
      </div>
    )
  }

}

export default Profile