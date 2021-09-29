import React, { useState, useEffect } from "react";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "react-bootstrap";
import useComment from '../hooks/useComment';
import Comment from '../components/CommentComponent';

const CommentList = ({ commentId, loadingState }) => {

    const { getComments } = useComment();

    const [loading, setLoading] = useState(loadingState);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        
        getComments(commentId).then( response => {
            setComments(response.data);
        });

    }, [loading]);

  return (
    <>
      <br></br>
      { comments.map( (key) => { return <Comment key={key.id} {...key}/>}) }
      
    </>
  );
};

export default CommentList;



