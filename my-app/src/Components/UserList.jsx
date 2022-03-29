import React from 'react';
import User from './User';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

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
         <TransitionGroup>
            {
               users.map((item, index) => {
                  return (
                     <CSSTransition key={item.id} classNames='user__CSStransition' timeout={1000}>
                        <div className='user__list'>
                           <User item={item} removeUser={removeUser} index={index} />
                        </div>
                     </CSSTransition>
                  )
               })
            }
         </TransitionGroup>
      </>
   )
}

export default UserList;