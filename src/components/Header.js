import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { ButtonDropdown, 
        DropdownToggle, 
        DropdownMenu, 
        DropdownItem } from 'reactstrap';

const Header = (props, { items, multiSelect = false }) => {
  const [dropdownOpen, setOpen] = useState(false);
  // const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!dropdownOpen);

  return (
    <header>

      <h1 id="headerTitle"> Brewser </h1>

      <ButtonDropdown 
        isOpen={ dropdownOpen } 
        onClick={ () => setOpen(!dropdownOpen)}
        // toggle={ toggle }
      >
        { dropdownOpen && props.children }

        <DropdownToggle 
          caret
          className="menuBtn"
        >
          Links
        </DropdownToggle>

        <DropdownMenu className="menu">

          <div className="nav">

            <DropdownItem className="dropdownItem">
              <Link className="dropdownItem"to={ '/' }> Home </Link>
            </DropdownItem>

            <DropdownItem className="dropdownItem">
              <Link to={ '/about' }> About </Link>
            </DropdownItem>

          </div>

          <div className="userLinks">

          { props.currentUser ? 
            <>

              <DropdownItem className="dropdownItem">
                <Link to={ '/profile' }>
                  Profile
                </Link>
              </DropdownItem>

              <DropdownItem 
                onClick={ props.logout } 
                className="dropdownItem">
                  Log Out
              </DropdownItem>

            </>
            :
              <>
                <DropdownItem className="dropdownItem">
                  <Link to={ '/register' }>
                    Register
                  </Link>
                </DropdownItem>

                <DropdownItem className="dropdownItem">
                  <Link to={ '/login' }>
                    Login
                  </Link>
                </DropdownItem>
              </>
            }
          </div> 
          
        </DropdownMenu>
      </ButtonDropdown>
    </header>
  );
}

    {/*
      <div className="nav">
        <div className="home">
          <Link to={'/'}>Home</Link>
        </div>
        <div className="about">
          <Link to={'/about'}>About</Link>
        </div>
      </div>
      {/* <div className="brewserLogo">
        <h3>Brewser</h3>
      </div> */}

      {/*}
      <div className="userLinks">
        <ul>
          { props.currentUser ? 
            <>
              <li><Link to={'/profile'}>Profile</Link></li>
              <li>
                  <div onClick={ props.logout } className="logoutNav">
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
      </div> */}
//     </header>
//   );
// }

export default Header;
