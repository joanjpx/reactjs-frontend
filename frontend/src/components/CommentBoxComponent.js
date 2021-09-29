import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, FormControl, FormGroup, InputGroup, Row } from "react-bootstrap";
import useComment from '../hooks/useComment';

const CommentBox = ({ commentId='' }) => {

    const {loading, comments, setComments, addReply} = useComment();

    const postComment = (e) => {

        alert('Post!!'+e.currentTarget.dataset.id);

        let data = {
            
            "parent_id": e.currentTarget.dataset.id,
            "author": null,
            "message": document.getElementById('commentBox'+e.currentTarget.dataset.id).value
        };

        addReply(data);

    };
    return (
    <>
    <br></br>
    <Row>
        <Col md={12}>
            <FormGroup>
                <InputGroup className="shadow-lg mb-2 bg-white rounded">
                    <InputGroup.Prepend>
                    <InputGroup.Text><FontAwesomeIcon icon={faComment} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl name={"commentBox"+commentId} id={"commentBox"+commentId} as="textarea" aria-label="With textarea" placeholder="Comentar ... " />
                </InputGroup>
            </FormGroup>
        </Col>
        <Col md={12}>
            <Button tweet={commentId} data-id={commentId} variant="outline-secondary float-right shadow-lg mb-2 rounded" onClick={ (e) => postComment(e) }><FontAwesomeIcon icon={faComment} /> Comentar</Button>
        </Col>
    </Row>
    </>
    );
}

export default CommentBox;