import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Information from './pages/Information';
import Reviews from './pages/Reviews';
import Users from './pages/Users';
import Layout from './Components/Layout';
import PageUser from './pages/PageUser';
import Login from './pages/Login';
import RequireAuth from './hoc/RequireAuth';
import AuthProvider, { AuthContext } from './hoc/AuthProvider';

import './App.css';



function App() {
   return (
      <AuthProvider>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={
                  <RequireAuth>
                     <Users />
                  </RequireAuth>
               } />
               <Route path='information' element={
                  <RequireAuth>
                     <Information />
                  </RequireAuth>
               } />
               <Route path='reviews' element={
                  <RequireAuth>
                     <Reviews />
                  </RequireAuth>
               } />
               <Route path='pageUser/:id' element={<PageUser />} />
               <Route path='login' element={<Login />} />
            </Route>
         </Routes>
      </AuthProvider>
   )
}

export default App;