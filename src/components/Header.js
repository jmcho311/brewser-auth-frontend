import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = (props) => {
  return (
    <header>
      <div className="nav">
        <div className="home">
          <Link to={'/'}>Home</Link>
        </div>
        <div className="about">
          <Link to={'/about'}>About</Link>
        </div>
      </div>
      {/* <div class="brewserLogo">
        <h3>Brewser</h3>
      </div> */}
      <div className="userLinks">
        <ul>
          { props.currentUser ? 
            <>
              <li><Link to={'/profile'}>Profile</Link></li>
              <li>
                  <div onClick={ props.logout } class="logoutNav">
                    Log Out
                  </div>
              </li>
            </>
          :
            <>
              <li><Link to={'/register'}>Register</Link></li>
              <li><Link to={'/login'}>Login</Link></li>
            </>
          }
        </ul>
      </div>
    </header>
  );
}

export default Header;
