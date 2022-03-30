import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';


function Layout() {
   return (
      <>
         <header>
            <Header />
         </header>
         <main>
            <Outlet />
         </main>
         <footer>
            <Footer />
         </footer>
      </>

   )
}

export default Layout;