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
import Loader from '../Components/UI/Loader/Loader';

function Users() {
   const [users, setUsers] = useState([]);
   const [querySearch, setQuerySearch] = useState('');
   const [visible, setVisible] = useState(false);
   const [usersSort, setUsersSort] = useState('');
   const [loader, setLoader] = useState(false);

   useEffect(() => {
      loadUser()
   }, [])

   const loadUser = async () => {
      setLoader(true)
      const data = await PostService.getUsers()
      setUsers(data)
      setLoader(false)
   }

   const removeUser = (user) => {
      let newUsers = users.filter(item => item.name !== user.name);
      setUsers(newUsers);
   }

   const sortedUsers = useMemo(() => {
      if (usersSort) {
         return [...users.sort((a, b) => a[usersSort].localeCompare(b[usersSort]))]
      } else {
         return users
      }
   }, [usersSort, users])

   const usersSearchedAndSorted = useMemo(() => {
      return sortedUsers.filter(item => item.name.toLowerCase().includes(querySearch.toLocaleLowerCase()))
   }, [querySearch, sortedUsers])

   const createUser = (newUser) => {
      setUsers([...users, newUser]);
      setVisible(false);
   }

   const sortUsers = (sort) => {
      setUsersSort(sort);
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
                  <SelectUsers usersSort={usersSort} sortUsers={sortUsers} />
               </div>
               {
                  loader ? <Loader /> : <UserList users={usersSearchedAndSorted} removeUser={removeUser} />
               }
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