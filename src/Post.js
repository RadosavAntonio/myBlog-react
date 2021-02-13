import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
// import {Button} from "@material-ui/core"

function post() {
  return (
    <div className="post">
      <Avatar 
        className="post__avatar"
        alt='Ghita'
        src="/static/images.avatar/1.jpg"
      />
      <h3 className="post__username">username</h3>
      <img
        className="post__image"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt=""
      />
      <h4 className="post__text">
        <strong>username: </strong>This is initial comment
      </h4>
      {/* <Button size="large" color="secondary" variant="text">hellow</Button> */}
    </div>
  );
}

export default post;