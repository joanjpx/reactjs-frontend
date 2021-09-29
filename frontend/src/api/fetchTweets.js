
import axios from 'axios';


const getTweets = () => {

    // console.log('Get All');
    
    return axios.get('http://localhost:8000/api/tweet');
}

const getCommentsByTweet = (id) => {

    // console.log('Get All');
    
    return axios.get('http://localhost:8000/api/tweet/'+id);
}

const storeTweet = async (tweet) => {

    // console.log(tweet);
    console.log('Store');

    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }

    let data = tweet;
    
    return await axios.post('http://localhost:8000/api/tweet',data,config);
}

const storeComment = async (tweet) => {

    // console.log(tweet);
    console.log('Store');

    const config = {     
        headers: { 'content-type': 'application/json' }
    }

    let data = tweet;
    
    return await axios.post('http://localhost:8000/api/tweet',data,config);
}

const deleteTweet = (id) => {
    
    console.log('Delete');
}

const showDetails = (id) => {

    console.log('Details');
}

const likeTweet = (id) => {
    console.log('Like');
}

const dislikeTweet = (id) => {

    console.log('Dislike');
}



export {
    storeTweet,
    deleteTweet,
    showDetails,
    likeTweet,
    dislikeTweet,
    getTweets,
    getCommentsByTweet,
    storeComment
}