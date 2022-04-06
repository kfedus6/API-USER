import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const RequireAuth = ({ children }) => {
   const { user } = useAuth();
   const { accounts } = useAuth();
   const location = useLocation();

   if (accounts[1].name != user) {
      return <Navigate to='/login' state={{ from: location }} />
   }
   else {
      return children
   }
}

export default RequireAuth;