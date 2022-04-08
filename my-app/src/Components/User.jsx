import React from 'react'
import { useNavigate } from 'react-router-dom';

function User({ item, index, removeUser }) {
   const navigate = useNavigate();

   return (
      <>
         <span>{item.id}.</span>
         <span>Імя: {item.name}</span>
         <span>Email: {item.email}</span>
         <button className='navigate__user' onClick={() => navigate(`pageUser/${item.id}`)}>Посмотреть</button>
         <div className='user__remove'>
            <button onClick={() => removeUser(item)}>Видалити</button>
         </div>
      </>
   )
}

export default User;