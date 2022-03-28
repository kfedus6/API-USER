import React from 'react';
import cl from './ButtonAddUser.module.css';

function ButtonAddUser({ setVisible }) {
   return (
      <button onClick={() => setVisible(true)} className={cl.add__user}>Добавить</button>
   )
}

export default ButtonAddUser;