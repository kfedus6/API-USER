import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Images/userlogo.png'

function Header() {
   return (
      <>
         <header className='header'>
            <div className='header__logo'>
               <img src={logo} alt='logo' />
            </div>
            <div className='header__menu'>
               <Link to="/">Користувач</Link>
               <Link to="/information">Інформація</Link>
               <Link to="/reviews">Відгук</Link>
            </div>
         </header>
      </>
   )
}

export default Header;