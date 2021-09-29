import { useState, useEffect } from 'react';
import { getTweets, storeTweet, getCommentsByTweet, storeComment } from '../api/fetchTweets';


const useComment = () => {
    
    const [ loading, setLoading] = useState(false);
    const [ comments, setComments ] = useState([]);


    const getComments = (id) => {

        return getCommentsByTweet(id);
    }


    const addReply = (data) => { 
    
        storeComment(data).then( response => {
        
        //   setTweets(response.data);    

          document.getElementById('message').value="";
    
        }).catch(err => {
    
            throw err;
        });
    }

    return {loading, comments, setComments, addReply, getComments};

}


export default useComment;