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

      const account = accounts.filter(account => account.name == name && account.password == password);
      if (account.length == 0) {
         setNumber(number - 1)
         alert(`У вас ${number} спроб`)
      } else {
         setNumber(3)
         setPersone(name)
      }
      cbTo()
   }

   return <AuthContext.Provider value={{ persone, accounts, number, signin }}>
      {children}
   </AuthContext.Provider>

}

export default AuthProvider;