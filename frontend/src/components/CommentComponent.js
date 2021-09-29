import React, { useState } from "react";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "react-bootstrap";
import Moment from "react-moment";
import Skeleton from "react-loading-skeleton";

const Comment = ( {message, created_at} ) => {

  return (
    <>
      <div className="card p-3 mb-3 shadow-lg mb-2 rounded">
        <div className="d-flex justify-content-between align-items-center">
          <div className="user d-flex flex-row align-items-center">
            <Image
              src="https://i.imgur.com/hczKIze.jpg"
              width="30"
              className="user-img rounded-circle mr-2"
            />
            <span>
              <small className="font-weight-bold text-primary">
                @anonymous &nbsp;
              </small>
              <small className="font-weight-bold">
                {message}
              </small>
            </span>
          </div>
          <small>{<Moment fromNow>{created_at}</Moment> || <Skeleton />}</small>
        </div>
        <div className="action d-flex justify-content-between mt-2 align-items-center">
          <div className="reply px-4">
            <span className="dots mr-2">
              <small>
                <FontAwesomeIcon icon={faThumbsUp} /> 25
              </small>
            </span>
            <span className="dots mr-2">
              <small>
                <FontAwesomeIcon icon={faThumbsDown} /> 25
              </small>
            </span>
          </div>
          <div className="icons align-items-center">
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-check-circle-o check-icon"></i>
          </div>
        </div>
      </div>
    </>
  );
};


export default Comment;