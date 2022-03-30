import React from 'react';
import cl from '../SelectUsers/SelectUsers.module.css';

function SelectUsers({ usersSort, sortUsers }) {
   return (
      <select value={usersSort} className={cl.users__sort} onChange={(e) => sortUsers(e.target.value)}>
         <option disabled value="">Сортувати</option>
         <option value="name">По імя</option>
         <option value="email">По email</option>
      </select>
   )
}

export default SelectUsers;