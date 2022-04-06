import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState('');
   const [accounts, setAccounts] = useState([
      { name: 'kolya', password: '1111' },
      { name: 'dima', password: '1111' },
      { name: 'egor', password: '1111' },
   ])

   const signin = (name, cbTo) => {
      setUser(name)
      cbTo()
   }

   return <AuthContext.Provider value={{ user, accounts, signin }}>
      {children}
   </AuthContext.Provider>

}

export default AuthProvider;