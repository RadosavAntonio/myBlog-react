import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
// import {Button} from "@material-ui/core"

function post({username, caption, imageUrl}) {
  return (
    <div className="post">
      <div class="post__header">
        <Avatar 
          className="post__avatar"
          alt={username}
          src="/static/images.avatar/1.jpg"
        />
        <h3 className="post__username">{username}</h3>
      </div>
      <img
        className="post__image"
        src={imageUrl}
        alt=""
      />
      <h4 className="post__text">
        <strong>{username}: </strong>{caption}
      </h4>
      {/* <div className="test__button">
        <Button size="medium" color="secondary" variant="outlined">test button</Button>
      </div> */}
    </div>
  );
}

export default post;