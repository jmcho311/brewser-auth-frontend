import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = (props) => {

  return (
    <header>

      <h1 id="headerTitle"> Brewser </h1>

      <div className="nav">
        <div className="home">
          <Link to={'/'}>Home</Link>
        </div>
        <div className="about">
          <Link to={'/about'}>About</Link>
        </div>
      </div>
      <div className="nav">
        <div>
          { props.currentUser ? 
            <>
              <div>
                <Link to={'/profile'}>Profile</Link>
              </div>
              <div>
                  <div onClick={ props.logout } className="logoutNav">
                    Log Out
                  </div>
              </div>
            </>
          :
            <>
              <div><Link to={'/register'}>Register</Link></div>
              <div><Link to={'/login'}>Login</Link></div>
            </>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
