import React from "react";
import "./App.css";
import Post from "./Post";
import { useState } from "react";

function App() {
  const [post, setPost] = useState([
    {
      username: "AntonioR",
      caption: "first user",
      imageUrl:
        "https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-1520x800.png",
    },
    {
      username: "John",
      caption: "second user",
      imageUrl:
        "https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG",
    },
    {
      username: "Francesca",
      caption: "third user",
      imageUrl:
        "https://www.nhm.ac.uk/content/dam/nhmwww/discover/wpy-56/13.jpg.thumb.768.768.jpg",
    },
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="Blog"
        />
      </div>

      {
        post.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
    </div>
  );
}

export default App;
