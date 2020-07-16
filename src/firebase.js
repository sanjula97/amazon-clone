import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC_DH08mr8Dnf6NUy-Wr_e1L8SFMuP34qQ",
  authDomain: "clone-9f0cb.firebaseapp.com",
  databaseURL: "https://clone-9f0cb.firebaseio.com",
  projectId: "clone-9f0cb",
  storageBucket: "clone-9f0cb.appspot.com",
  messagingSenderId: "54572727396",
  appId: "1:54572727396:web:e24ce74f00689bc63f7371",
  measurementId: "G-2ZMQRD3FSK"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth }