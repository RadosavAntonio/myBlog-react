import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB7DsrxdpsZiUE1SEJKHMqXEUoid3SoaGw",
  authDomain: "social-media-app-antonior.firebaseapp.com",
  projectId: "social-media-app-antonior",
  storageBucket: "social-media-app-antonior.appspot.com",
  messagingSenderId: "390452534048",
  appId: "1:390452534048:web:48f7d1922bba2476c45545",
  measurementId: "G-VK8TLPNH5K",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
