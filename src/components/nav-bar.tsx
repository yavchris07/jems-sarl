import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.scss';
import logo from '../assets/icons/icon-red.png'
// import { type } from 'os';


function NavBar() {
  return (
    <nav>
      <div className='icon'>
        <img src={logo} alt="icon" />
      </div>
      <div className='items'>
        <ul>
          <li>
            <NavLink 
              to={'/'} 
              className='link'
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={'/apropos'} 
              className='link'
            >
             Apropos
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={'/contact'} 
              className='link'
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
