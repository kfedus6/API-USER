import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
   const [persone, setPersone] = useState('');
   const [accounts, setAccounts] = useState([
      { name: 'kolya', password: '1111', status: 'a' },
      { name: 'dima', password: '1111', status: 'u' },
      { name: 'egor', password: '1111', status: 'u' },
   ])
   const [number, setNumber] = useState(2)
   const signin = (name, password, cbTo) => {
      accounts.map(item => {
         if (item.name === name && item.password === password) {
            return setPersone(name)
         } else if (item.name != name && item.password != password && number === 2) {
            setNumber(1);
            alert(`У вас ${number} спробы`)
         } else if (number === 1) {
            setNumber(0);
            alert(`У вас ${number} спробы`)
         }
      })
      cbTo()
   }

   return <AuthContext.Provider value={{ persone, accounts, number, signin }}>
      {children}
   </AuthContext.Provider>

}

export default AuthProvider;