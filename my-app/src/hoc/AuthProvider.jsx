import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState('');
   const [accounts, setAccounts] = useState([
      { name: 'kolya', password: '1111' },
      { name: 'dima', password: '1111' },
      { name: 'egor', password: '1111' },
   ])

   const signin = (name, password, cbTo) => {
      accounts.map(item => {
         if (item.name === name && item.password === password) {
            return setUser(name);
         }
      })
      cbTo()
   }

   return <AuthContext.Provider value={{ user, signin }}>
      {children}
   </AuthContext.Provider>

}

export default AuthProvider;