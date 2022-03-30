import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Information from './pages/Information';
import Reviews from './pages/Reviews';
import Users from './pages/Users';

import './App.css';
import Layout from './Components/Layout';



function App() {
   return (
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={<Users />} />
            <Route path='information' element={<Information />} />
            <Route path='reviews' element={<Reviews />} />
         </Route>
      </Routes>
   )
}

export default App;