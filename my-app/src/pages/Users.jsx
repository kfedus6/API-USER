import React, { useEffect, useMemo, useState } from 'react';
import PostService from '../API/PostService';
import ButtonAddUser from '../Components/UI/ButtonAddUser/ButtonAddUser';
import InputSearch from '../Components/UI/InputSearch/InputSearch';
import UserList from '../Components/UserList';
import ImgUsers from '../Components/Images/users.png';
import Modal from '../Components/UI/Modal/Modal';
import cl from '../Components/UI/ButtonAddUser/ButtonAddUser.module.css';
import UserForm from '../Components/UserForm';
import SelectUsers from '../Components/UI/SelectUsers/SelectUsers';
import Loader from '../Components/UI/Loader/Loader';
import { getPagesArray, getPagesCount } from '../Components/PagesCount/PagesCount';

function Users() {
   const [users, setUsers] = useState([]);
   const [querySearch, setQuerySearch] = useState('');
   const [visible, setVisible] = useState(false);
   const [usersSort, setUsersSort] = useState('');
   const [loader, setLoader] = useState(false);
   const [totalPages, setTotalPages] = useState(0);
   const [limit, setLimit] = useState(3);
   const [page, setPage] = useState(1);
   let pagesArray = getPagesArray(totalPages);

   useEffect(() => {
      loadUser()
   }, [page])

   const loadUser = async () => {
      setLoader(true);
      const response = await PostService.getUsers(limit, page);
      setUsers(response.data);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPagesCount(totalCount, limit));
      setLoader(false);
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

   const changePage = (e) => {
      setPage(e.target.textContent);
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
         <div className='position__page'>
            {
               pagesArray.map((p, idx) => {
                  return <span key={idx} className='page' onClick={changePage} >{p}</span>
               })
            }
         </div>
      </>
   )
}

export default Users;