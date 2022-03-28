import React, { useState } from 'react';
import imgButton from '../Components/Images/user.png'

function UserForm({ createUser }) {
   const [user, setUser] = useState({ name: '', email: '', id: '' });

   const addNewUser = (e) => {
      e.preventDefault();
      createUser(user);
      setUser({ name: '', email: '', id: '' });
   }

   return (
      <form>
         <input
            className='create'
            type="text"
            placeholder='Имя'
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value, id: e.target.value })}
         />
         <input
            className='create'
            type="text"
            placeholder='Email'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
         />
         <button className='button__img' onClick={addNewUser}><img src={imgButton} alt="ok" /></button>
      </form>
   )
}

export default UserForm