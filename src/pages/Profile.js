import React from 'react';

const Profile = props => {
  return (
    <div className="profile">
      <h1>Welcome to your Profile!</h1>
      <h2>Profile of user with ID { props.currentUser }</h2>
    </div>
  )
}

export default Profile