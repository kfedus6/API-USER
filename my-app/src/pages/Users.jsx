import React, { useEffect, useMemo, useState } from 'react';
import PostService from '../API/PostService';
import InputSearch from '../Components/UI/InputSearch';
import UserList from '../Components/UserList';

function Users() {
   const [users, setUsers] = useState([]);
   const [querySearch, setQuerySearch] = useState('');

   useEffect(() => {
      loadUser()
   }, [])

   const loadUser = async () => {
      const data = await PostService.getUsers()
      setUsers(data)
   }

   const removeUser = (user) => {
      let newUsers = users.filter(item => item.name !== user.name);
      setUsers(newUsers);

   }

   const usersSearch = useMemo(() => {
      if (querySearch === '') {
         return users;
      } else {
         return users.filter(item => item.name.toLowerCase().includes(querySearch.toLocaleLowerCase()))
      }
   }, [querySearch, users])

   return (
      <><div className='block__list'>
         <div className='block__user'>
            <InputSearch querySearch={querySearch} setQuerySearch={setQuerySearch} />
            <UserList users={usersSearch} removeUser={removeUser} />
         </div>
      </div>

      </>
   )
}

export default Users;