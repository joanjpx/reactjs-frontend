//Obtener Posts
import axios from 'axios';

export function getTweets() {
  return axios.get('http://localhost:5000/api/posts');
}

export function postTweet({ title, body }) {
  return axios({
    method: 'post',
    url: 'http://localhost:5000/api/posts',
    data: {
      title,
      body,
    }
  })
}