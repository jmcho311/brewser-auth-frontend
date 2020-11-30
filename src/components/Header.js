import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      showMenu: false,
    }
    this.showMenu = this.showMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }
  
  showMenu(event) {
    event.preventDefault()
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu)
    })
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu)
    })
  }

  render() {
    return (
      <header>
        <Link className="headerTitle" to={ '/' }>Brewser</Link>
        <div className="menu">
          <i onClick={ this.showMenu } id="bars" className="fas fa-bars" />
        <div>
          { this.state.showMenu ? 
            (<ul id="menu">
              <li className="menuItem">
                <Link to={ '/' } className="Link">Search</Link>
              </li>
              <li className="menuItem">
                <Link to={ '/about' } className="Link">About</Link>
              </li>
              { this.props.currentUser ?
                <>
                  <li className="menuItem">
                    <Link to={ '/profile' } className="Link">Profile</Link>
                  </li>
                  <li className="menuItem">
                    <Link onClick={ this.props.logout }className="Link">Log Out</Link>
                  </li>
                </>
                :
                <>
                  <li id="register" className="menuItem">
                    <Link to={ '/register' }className="Link">Register</Link>
                  </li>
                  <li id="login" className="menuItem">
                    <Link to={ '/login' }className="Link">Login</Link>
                  </li>
                </>
              }
            </ul>)
          : (null) }
        </div>
      </div> 
    </header>
  )}
}

export default Header