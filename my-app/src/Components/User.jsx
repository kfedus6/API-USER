import React from 'react'

function User({ item, index, removeUser }) {
   return (
      <>
         <span className='idx'>{index + 1}.</span>
         <span className="name">Имя: {item.name}</span>
         <span className="email">Email: {item.email}</span>
         <div className='block__remove'>
            <button onClick={() => removeUser(item)}>Удалить</button>
         </div>
      </>
   )
}

export default User;