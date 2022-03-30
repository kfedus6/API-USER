import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Images/userlogo.png'

function Header() {
   return (
      <>
         <div className='header'>
            <div className='header__logo'>
               <img src={logo} alt='logo' />
            </div>
            <div className='header__menu'>
               <NavLink to="/">Користувач</NavLink>
               <NavLink to="/information">Інформація</NavLink>
               <NavLink to="/reviews">Відгук</NavLink>
            </div>
         </div>
      </>
   )
}

export default Header;