import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Information from './pages/Information';
import Reviews from './pages/Reviews';
import Users from './pages/Users';
import Header from './Components/Header';
import Footer from './Components/Footer';

import './App.css';



function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path='/' element={<Users />} />
            <Route path='/information' element={<Information />} />
            <Route path='/reviews' element={<Reviews />} />
         </Routes>
         <Footer />
      </>
   )
}

export default App;