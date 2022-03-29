import React from 'react'

function User({ item, index, removeUser }) {
   return (
      <>
         <span>{index + 1}.</span>
         <span>Імя: {item.name}</span>
         <span>Email: {item.email}</span>
         <div className='user__remove'>
            <button onClick={() => removeUser(item)}>Видалити</button>
         </div>
      </>
   )
}

export default User;