import React, { useEffect, useMemo, useState } from 'react';
import PostService from '../API/PostService';
import ButtonAddUser from '../Components/UI/ButtonAddUser/ButtonAddUser';
import InputSearch from '../Components/UI/InputSearch/InputSearch';
import UserList from '../Components/UserList';
import ImgUsers from '../Components/Images/users.png'
import Modal from '../Components/UI/Modal/Modal';
import cl from '../Components/UI/ButtonAddUser/ButtonAddUser.module.css'
import UserForm from '../Components/UserForm';
import SelectUsers from '../Components/UI/SelectUsers/SelectUsers';

function Users() {
   const [users, setUsers] = useState([]);
   const [querySearch, setQuerySearch] = useState('');
   const [visible, setVisible] = useState(false);
   const [usersSort, setUsersSort] = useState('');

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

   const createUser = (newUser) => {
      setUsers([...users, newUser]);
      setVisible(false);
   }

   const sortedUsers = (sort) => {
      setUsersSort(sort);
      setUsers([...users.sort((a, b) => a[sort].localeCompare(b[sort]))]);
   }

   return (
      <>
         <Modal visible={visible} setVisible={setVisible} >
            <UserForm createUser={createUser} />
         </Modal>
         <div className='user'>
            <div className='user__content'>
               <div className='search__sort'>
                  <InputSearch querySearch={querySearch} setQuerySearch={setQuerySearch} />
                  <SelectUsers usersSort={usersSort} sortedUsers={sortedUsers} />
               </div>
               <UserList users={usersSearch} removeUser={removeUser} />
            </div>
            <div className={cl.block__add}>
               <ButtonAddUser setVisible={setVisible} />
               <div className='img'>
                  <img src={ImgUsers} alt="img" />
               </div>
            </div>
         </div>
      </>
   )
}

export default Users;