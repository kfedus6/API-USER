import React from 'react';
import User from './User';

function UserList({ users, removeUser }) {

   if (!users.length) {
      return (
         <h2 style={{ textAlign: 'center' }}>
            Користувача не знайдено!
         </h2>
      )
   }

   return (
      <>
         {
            users.map((item, index) => {
               return (
                  <div className='users__list' key={index}>
                     <User user={item} removeUser={removeUser} />
                  </div>
               )
            })
         }
      </>
   )
}

export default UserList;