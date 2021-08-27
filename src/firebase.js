import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgz7qQGX6EarxTW0YSfbXY1ydf6kcfE0M",
  authDomain: "bornsocial-14fe2.firebaseapp.com",
  projectId: "bornsocial-14fe2",
  storageBucket: "bornsocial-14fe2.appspot.com",
  messagingSenderId: "624321439369",
  appId: "1:624321439369:web:1c49cdb28d05d9f75dc858",
  measurementId: "G-HYTHM1MT7Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
