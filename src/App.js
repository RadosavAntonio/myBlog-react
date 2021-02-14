import React from "react";
import './App.css';
import Post from "./Post";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Blog"/>
      </div>

      <Post username="AntonioR" caption="first user" imageUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
      <Post username="John" caption="second user" imageUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
      <Post username="Francesca" caption="third user" imageUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
    </div>
  );
}

export default App;
