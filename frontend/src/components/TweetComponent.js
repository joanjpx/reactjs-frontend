
import React, {useState} from 'react';
import { Card, Button, Container, Row, Col, Image, Badge, FormGroup, InputGroup, FormControl, ButtonGroup } from "react-bootstrap";
import {deleteTweet, showDetails,likeTweet,dislikeTweet} from '../api/fetchTweets';
import Skeleton from 'react-loading-skeleton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faComment, faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import Moment from 'react-moment';
import propTypes from 'prop-types';
import CommentBox from '../components/CommentBoxComponent';
import CommentList from '../components/CommentListComponent';


const Tweet = ({ author, message, photo, likes, dislikes, created_at, id }) => {
    

    const [tweetComments, setTweetComment] = useState(0);
    const [tweetLikes, setTweetLike] = useState(0);
    const [tweetDislikes, setTweetDislike] = useState(0);

    return (
      <>
        <Row show={"false"}>
          <Col md={12}>
            <Card className="col-md-12 shadow-lg mb-2 bg-white rounded">
              <Card.Body>
                <Row>
                  <Col xs={12} md={12}>
                    {photo ? (
                      <Image src={photo} width="100%" rounded />
                    ) : (
                      <Skeleton height="400px" />
                    )}
                  </Col>
                </Row>
              </Card.Body>
              <Card.Body>
                <Card.Title>{author || <Skeleton />}</Card.Title>
                <Card.Text>{message || <Skeleton />}</Card.Text>
                <Card.Text className="float-right">
                  {<Moment fromNow>{created_at}</Moment> || <Skeleton />}
                </Card.Text>
                <Badge variant="secondary mr-2">
                  <FontAwesomeIcon icon={faComment} /> {tweetComments}
                </Badge>
                <Badge variant="primary mr-2">
                  <FontAwesomeIcon icon={faThumbsUp} /> {tweetLikes}
                </Badge>
                <Badge variant="danger mr-2">
                  <FontAwesomeIcon icon={faThumbsDown} /> {tweetDislikes}
                </Badge>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col md={4}>
                    <Button
                      tweet={id}
                      variant="outline-secondary btn-block mr-1"
                      onClick={(e) => setTweetComment(tweetComments + 1)}
                    >
                      <FontAwesomeIcon icon={faComment} /> Comentar
                    </Button>
                  </Col>
                  <Col md={4}>
                    <Button
                      tweet={id}
                      variant="outline-primary btn-block mr-1"
                      onClick={(e) => setTweetLike(tweetLikes + 1)}
                    >
                      <FontAwesomeIcon icon={faThumbsUp} /> Like
                    </Button>
                  </Col>
                  <Col md={4}>
                    <Button
                      tweet={id}
                      variant="outline-danger btn-block mr-1"
                      onClick={(e) => setTweetDislike(tweetDislikes + 1)}
                    >
                      <FontAwesomeIcon icon={faThumbsDown} /> Dislike
                    </Button>
                  </Col>
                </Row>
              </Card.Footer>
                <CommentBox commentId={id} />
                <CommentList commentId={id} loadingState={true} />
            </Card>
          </Col>
        </Row>
      </>
    );
}

Tweet.defaultProps = {
    author: '', 
    message: '', 
    photo: '',
    likes: '',
    dislikes: '',
    created_at: '',
    id : ''
};

export default Tweet;