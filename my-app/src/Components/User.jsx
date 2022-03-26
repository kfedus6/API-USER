import React from 'react'

function User({ user, removeUser }) {
   return (
      <>
         <span className='idx'>{user.id}</span>
         <span className="name">Имя: {user.name}</span>
         <span className="email">Email: {user.email}</span>
         <div className='block__remove'>
            <button onClick={() => removeUser(user)}>Удалить</button>
         </div>
      </>
   )
}

export default User;