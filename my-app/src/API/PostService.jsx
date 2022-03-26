import axios from 'axios';

class PostService {
   static async getUsers() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      return response.data
   }
}

export default PostService;