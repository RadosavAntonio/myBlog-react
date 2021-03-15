import React from "react";
import "./App.css";
import Post from "./Post";
import { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, Input } from "@material-ui/core";

// MODAL STYLE
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

// the APP
function App() {
  const classes = useStyles();
  const [post, setPost] = useState([
    // {
    //   username: "AntonioR",
    //   caption: "first user",
    //   imageUrl:
    //     "https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-1520x800.png",
    // },
    // {
    //   username: "John",
    //   caption: "second user",
    //   imageUrl:
    //     "https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG",
    // },
    // {
    //   username: "Francesca",
    //   caption: "third user",
    //   imageUrl:
    //     "https://www.nhm.ac.uk/content/dam/nhmwww/discover/wpy-56/13.jpg.thumb.768.768.jpg",
    // },
  ]);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null); 
  const [openLogin, setOpenLogin] = useState(false)

  // any login/out listen
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user login
        setUser(authUser); //this keep you logged in  
        if (authUser.displayName) {
          // don't update user
        } else {
          // do this on new singup
          return authUser.updateProfile({
            displayName: username, //this add to the firebase as an attribute
          })
        }
      } else {
        // user logout
        setUser(null);
      }
    })
  }, [user, username]);  //any time thy changed they have to be called here

  // run a piece of code using a specific condition (useEffect)
  useEffect(() => {
    db.collection("post").onSnapshot((snapshot) => {
      //  every time firebase update, update this code
      setPost(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);
  // when post change it runs again ([] means until page refresh)

  const singUp = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .than((authUser) => {
      return authUser.user.updateProfile({
        displayName: username
      })
    })
    .catch((error) => alert(error.message))
    setOpen(false);
  };

  const logIn = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .catch((error) => alert(error.message))
    setOpenLogin(false);
  }

  return (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                className="app__headerImage"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="Blog"
              />
            </center>
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={email}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={singUp}>
              Sing Up
            </Button>
          </form>
        </div>
      </Modal>
      <Modal open={openLogin} onClose={() => setOpenLogin(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                className="app__headerImage"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="Blog"
              />
            </center>
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={email}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={logIn}>
              Login
            </Button>
          </form>
        </div>
      </Modal>

      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="Blog"
        />
      </div>

      {user ? 
        <Button onClick={() => auth.signOut()}>Logout</Button> :
        (
          <div class="app__loginContainer">
            <Button onClick={() => setOpenLogin(true)}>Login</Button>
            <Button onClick={() => setOpen(true)}>Sing Up</Button>
          </div>
        )
      }

      {/* id is for rendering just the new one */}
      {post.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
