import { useState, useEffect } from 'react';
import { getTweets, storeTweet } from '../api/fetchTweets';


const useTweets = () => {
    
    const [ loading, setLoading] = useState(false);
    const [ tweets, setTweets ] = useState([]);

    const firstLoad = async () => {
    
        getTweets().then( response => {
          setTweets(response.data);
          setLoading(true);
        });
    }
    
    useEffect(() => {
        firstLoad();
    }, []);


    const addTweet = (data) => { 
        
        // let data = new FormData(document.getElementById('reactForm'));
    
        storeTweet(data).then( response => {
        
    
          setTweets(response.data);
    
          document.getElementById('message').value="";
    
        }).catch(err => {
    
            throw err;
        });
    }

    return {loading, tweets, setTweets, addTweet};

}

const postTweet = (data) => {
    
}


export default useTweets;