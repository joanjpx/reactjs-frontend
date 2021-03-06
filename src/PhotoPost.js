import React from 'react';

const PhotoPost = (props) => {
  return (
  <div className="container">
  <div className="card">
    <div className="card-image">
      <figure className="image">
        <img src={props.url} alt="Placeholder"/>
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="https://slackhq.com/wp-content/uploads/2016/06/slack-help-hr-920.jpg?w=460" alt="Placeholder"/>
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{props.name}</p>
          <p className="subtitle is-6">@{props.user}</p>
        </div>
      </div>

      <div className="content">
        {props.message}. #responsive @bootstrap @reactjs
        <br/>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
    <footer className="card-footer">
        <a href="/like" className="card-footer-item"> <i className="fas fa-thumbs-up"></i>&nbsp; Like it</a>
        <a href="/love" className="card-footer-item"><i className="fas fa-heart"></i>&nbsp; Love it</a>
        <a href="/dontlike" className="card-footer-item"><i className="fas fa-thumbs-down"></i>&nbsp; Don't Like It</a>
    </footer>
  </div>
  <br/>
  </div>
  
  );
}

export default PhotoPost;
