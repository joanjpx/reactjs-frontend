import React from 'react';

const PhotoPost = (props) => {
  return (
  <div className="container">
  <div class="card">
    <div class="card-image">
      <figure className="image">
        <img src={props.url} alt="Placeholder"/>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://slackhq.com/wp-content/uploads/2016/06/slack-help-hr-920.jpg?w=460" alt="Placeholder"/>
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{props.name}</p>
          <p class="subtitle is-6">@{props.user}</p>
        </div>
      </div>

      <div class="content">
        {props.message}. #responsive @bootstrap @reactjs
        <br/>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
    <footer class="card-footer">
        <a href="/like" class="card-footer-item"> <i className="fas fa-thumbs-up"></i>&nbsp; Like it</a>
        <a href="/love" class="card-footer-item"><i className="fas fa-heart"></i>&nbsp; Love it</a>
        <a href="/dontlike" class="card-footer-item"><i className="fas fa-thumbs-down"></i>&nbsp; Don't Like It</a>
    </footer>
  </div>
  <br/>
  </div>
  
  );
}

export default PhotoPost;
