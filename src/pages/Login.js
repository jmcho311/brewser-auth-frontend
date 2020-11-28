import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import UserModel from '../models/user'

const Login = props => {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let handleEmail = e => {
    setEmail(e.target.value)
  }

  let handlePassword = e => {
    setPassword(e.target.value)
  }

  let handleSubmit = (event) => {
    event.preventDefault()

    UserModel.login({
      email,
      password
    }).then(data => {
        if (!data.user) {
          console.log('Login Unsuccessful')
          return false
        }
        // storeUser is defined in the app component and passed to Login
        props.storeUser(data.user)
      })
      .catch(err => console.log('Login Error', err))
  }

  // if user is logged in, redirect
  if (props.currentUser) return <Redirect to='/profile' />

  return (
    <div>
      <h4>Login</h4>
      <form onSubmit={ handleSubmit }>
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input 
            onChange={ handleEmail } 
            value={ email } 
            type="email" 
            id="email" 
            name="email" 
            required  
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            onChange={ handlePassword } 
            value={ password } 
            type="password" 
            id="password" 
            name="password" 
            required
          />
        
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        <h5> Don't have an account? Click 
          <a href='/register' style={ { textDecorationLine: 'underline'} }>here</a> to sign up!
        </h5>
      </div>
    </div>
  )
}

export default Login;