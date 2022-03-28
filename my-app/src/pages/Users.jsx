import React, { useEffect, useMemo, useState } from 'react';
import PostService from '../API/PostService';
import ButtonAddUser from '../Components/UI/ButtonAddUser/ButtonAddUser';
import InputSearch from '../Components/UI/InputSearch/InputSearch';
import UserList from '../Components/UserList';
import ImgUsers from '../Components/Images/users.png'
import Modal from '../Components/UI/Modal/Modal';
import cl from '../Components/UI/ButtonAddUser/ButtonAddUser.module.css'
import UserForm from '../Components/UserForm';

function Users() {
   const [users, setUsers] = useState([]);
   const [querySearch, setQuerySearch] = useState('');
   const [visible, setVisible] = useState(false)

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


   return (
      <>
         <Modal visible={visible} setVisible={setVisible} >
            <UserForm createUser={createUser} />
         </Modal>
         <div className='block__list'>
            <div className='block__user'>
               <InputSearch querySearch={querySearch} setQuerySearch={setQuerySearch} />
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