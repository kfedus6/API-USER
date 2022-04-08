import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hook/useFetching';

function PageUser() {
   const { id } = useParams()
   const navigate = useNavigate()
   const [user, setUser] = useState([]);
   const [post, setPost] = useState({});

   const [loadUserAndPost] = useFetching(async () => {
      const dataUser = await PostService.getOneUser(id);
      const dataPost = await PostService.getPost(id);
      setUser(dataUser);
      setPost(dataPost);
   })


   useEffect(() => {
      loadUserAndPost();
   }, [])

   return (
      <>
         <div>
            <h2>Інформація користувча</h2>
            <div>
               <span>{user.name}</span><br />
               <span>{user.email}</span><br />
               <span>{user.phone}</span><br />
            </div>
            <div>
               <h2>Пост</h2>
            </div>
            <div>
               <h3>{post.title}</h3>
               <p>{post.body}</p>
            </div>
         </div>
         <button className='exit' onClick={() => navigate(-1)}>Вийти</button>
      </>
   )
}

export default PageUser;