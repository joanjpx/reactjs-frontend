//Obtener Posts
import axios from 'axios';

export function getPosts() {
  return axios.get('https://jsonplaceholder.typicode.com/photos');
}

export function postPost({ title, body }) {
  return axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/photos',
    data: {
      title,
      body,
    }
  })
}