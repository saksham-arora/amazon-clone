// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhrJRDCu5EH91tWospmofWME3nuyxyULQ",
  authDomain: "clone-7fb0d.firebaseapp.com",
  projectId: "clone-7fb0d",
  storageBucket: "clone-7fb0d.appspot.com",
  messagingSenderId: "1006589592219",
  appId: "1:1006589592219:web:359430ac3fb73157ff7c3e",
  measurementId: "G-MN18C3Z7V9"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
