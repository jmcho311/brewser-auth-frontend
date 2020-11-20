import React from 'react';

// pull data from user model
// import brewery post and beer post


const Profile = props => {
  return (
    <div className="profile">
      <h1>Welcome to your Profile!</h1>
      <h2>Profile of user with ID { props.currentUser }</h2>
    </div>
  )
}

export default Profile