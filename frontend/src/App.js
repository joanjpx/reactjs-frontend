import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Card, Button, Container, Row, Col, InputGroup, FormControl, Form, FormGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faComment, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import Tweet from './components/TweetComponent';
import { storeTweet, getTweets } from "./api/fetchTweets";
import Skeleton from 'react-loading-skeleton';
import useTweets from "./hooks/useTweets";


const App = ( ) => {

  
  const {loading, tweets, addTweet} = useTweets();

  const [ showAttachment, setShowAttachment] = useState(false);
  // const [ idUser, setId ] = useState(1);

  const subirTweet = () => {

    let data = new FormData(document.getElementById('reactForm'));
    data.append('author', 'Joan');
    addTweet(data);
  }
  // console.log(idUser);
  const toggleAttachment = () => { 

    showAttachment ? setShowAttachment(false) : setShowAttachment(true)

  }

  return (
    <>
      <Container fluid={false}>
        <Row>
          <Col md={8}>
            <Row>
              <Col md={12}>
                <Card className="col-md-12 shadow-lg p-3 mb-2 bg-white rounded">
                  <Card.Header>Timeline</Card.Header>
                  <Card.Body>
                    <Form id="reactForm" encType="multipart/form-data">
                    <Card.Title>{ loading ? "¿Que estás Pensando?" : <Skeleton /> } </Card.Title>
                      <FormGroup>
                        <InputGroup className="shadow-lg rounded">
                          <InputGroup.Prepend>
                            <InputGroup.Text><FontAwesomeIcon icon={faComment} /></InputGroup.Text>
                          </InputGroup.Prepend>
                          { loading ? <FormControl name="message" id="message" as="textarea" aria-label="With textarea" /> : <Skeleton /> }
                        </InputGroup>
                      </FormGroup>
                      <InputGroup className={ showAttachment ? '' : 'd-none'}>
                        <InputGroup.Prepend>
                          <InputGroup.Text><FontAwesomeIcon icon={faComment} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        { loading ? <FormControl name="photo" id="photo" as="input" aria-label="With textarea" /> : <Skeleton /> }
                      </InputGroup>
                      <br></br>
                      <Button type="button" onClick={ (e) => toggleAttachment() } variant="" className="float-left"><FontAwesomeIcon icon={faPaperclip} /></Button>
                      <Button type="button" onClick={ (e) => subirTweet() } variant="primary" className="float-right"><FontAwesomeIcon icon={faComment} /> Tweet</Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            { tweets.map( (key) => { return <Tweet key={key.id} {...key}/>}) }            
          </Col>
          <Col md={4}>
            <Card className="col-md-12 shadow-lg p-3 mb-5 bg-white rounded">
              <Card.Header>#trending</Card.Header>
              <Card.Body>
                <Card.Title>{ loading ? "Special title" : <Skeleton /> }</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
