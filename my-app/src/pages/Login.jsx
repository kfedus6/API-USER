import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ModalLogin from '../Components/UI/ModalLogin/ModalLogin';
import { useAuth } from '../hook/useAuth';

const Login = () => {
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');
   const location = useLocation();
   const { signin } = useAuth();
   const navigate = useNavigate();

   const authorization = () => {
      signin(name, password, () => {
         navigate(location.state.from, { replace: true })
      })
   }

   return (
      <>
         <div>
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' />
            <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Password' />
            <button onClick={authorization}>Login</button>
         </div>
         <div>
            <ModalLogin />
         </div>
      </>
   )
}

export default Login;