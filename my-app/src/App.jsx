import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Information from './pages/Information';
import Reviews from './pages/Reviews';
import Users from './pages/Users';
import Layout from './Components/Layout';
import PageUser from './pages/PageUser';

import './App.css';



function App() {
   return (
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={<Users />} />
            <Route path='information' element={<Information />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='pageUser/:id' element={<PageUser />} />
         </Route>
      </Routes>
   )
}

export default App;