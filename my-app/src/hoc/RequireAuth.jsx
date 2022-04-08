import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const RequireAuth = ({ children }) => {
   const { persone } = useAuth();
   const location = useLocation();

   if (persone === '') {
      return <Navigate to='/login' state={{ from: location }} />
   }
   else {
      return children
   }
}

export default RequireAuth;