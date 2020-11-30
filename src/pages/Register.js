import React, { useState } from 'react';
import UserModel from '../models/user';
import './App.scss';

const Register = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleName = e => {
    setName(e.target.value)
  }  
  const handleEmail = e => {
    setEmail(e.target.value)
  }
  const handlePassword = e => {
    setPassword(e.target.value)
  }
  const handleConfirmPassword = e => {
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (password === confirmPassword) {
      UserModel.create({ name, email, password })
        .then(data => {
          console.log('Successful register', data)
          // redirect to /login
          props.history.push('/login')
        })
    }
  }

  return (
    <div className="Page Register">
      <h1>Create An Account</h1>
      <h3 id="regTag">Joining Brewser will probably be the best thing to happen to you. Like, ever.</h3>
      <div className="regImgBlock">
        <form className="regFormBlock" onSubmit={ handleSubmit }>
          <div className="form-group">
            <label className="regLabel" htmlFor="name">Name</label>
            <input 
              onChange={ handleName } 
              value={ name }
              type="text" 
              id="name" 
              name="name" 
              required
            />
          </div>
          <div className="form-group">
            <label className="regLabel" htmlFor="name">Email</label>
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
            <label className="regLabel" htmlFor="name">Password</label>
            <input 
              onChange={ handlePassword } 
              value={ password } 
              type="password" 
              id="password" 
              name="password" 
              required
            />
          </div>
          <div className="form-group">
            <label className="regLabel" htmlFor="confirm-password">Confirm Password</label>
            <input 
              onChange={ handleConfirmPassword } 
              value={ confirmPassword } 
              type="password" 
              id="confirm-password" 
              name="confirm-password" 
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
      <div>
        <h5 id="goToLogin">Already have an account? Click <a className="redirect" href='/login' style={ { textDecorationLine: 'underline'} } >here</a> to log in!</h5>
      </div>
    </div>
  )
}

export default Register;