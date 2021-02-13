import React from "react";
import './App.css';
import Post from "./Post";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Blog"/>
      </div>

      <Post />
      {/* add component */}
    </div>
  );
}

export default App;
