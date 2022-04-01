import axios from 'axios';

class PostService {
   static async getUsers(limit, page) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/', {
         params: {
            _limit: limit,
            _page: page
         }
      })
      return response
   }
   static async getOneUser(id) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = response.data
      return data;
   }

   static async getPost(id) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = response.data
      return data
   }
}

export default PostService;