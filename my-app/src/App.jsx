import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Information from './pages/Information';
import Reviews from './pages/Reviews';
import Users from './pages/Users';
import logo from './Components/Images/logo.png'

import './App.css';

function App() {
   return (
      <>
         <header className='header'>
            <div className='header__logo'>
               <img src={logo} alt='logo' />
            </div>
            <div className='header__menu'>
               <Link to="/">Пользователь</Link>
               <Link to="/information">Информация</Link>
               <Link to="/reviews">Отзывы</Link>
            </div>
         </header>
         <Routes>
            <Route path='/' element={<Users />} />
            <Route path='/information' element={<Information />} />
            <Route path='/reviews' element={<Reviews />} />
         </Routes>
         <footer className='footer'>
            <hr />
            <span className='footer__words'>Все права защищены</span>
         </footer>
      </>
   )
}

export default App;