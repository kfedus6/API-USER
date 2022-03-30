import axios from 'axios';

class PostService {
   static async getUsers() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/', {
         params: {
            _limit: 3,
            _page: 1
         }
      })
      const headers = response.headers;
      console.log(headers);
      return response.data
   }
}

export default PostService;