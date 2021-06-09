// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBzM-QHyUUchyhpfdOq8ip50yYON3JNJCc",
    authDomain: "clone-8932c.firebaseapp.com",
    projectId: "clone-8932c",
    storageBucket: "clone-8932c.appspot.com",
    messagingSenderId: "656769005285",
    appId: "1:656769005285:web:d3749873aed817484b060c",
    measurementId: "G-J4V5D8LXM8"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };