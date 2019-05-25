//Obtener Posts
import axios from 'axios';

export function likeIt({ user_id, post_id }) {
  return axios({
    method: 'post',
    url: 'https://localhost:5000/posts/'+post_id,
    data: {
      user_id:user_id
    }
  })
}