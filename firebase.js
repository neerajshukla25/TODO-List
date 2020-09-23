 import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD2FwGfBfxjVPn5f32dv-kRrrA0OuK4xig",
    authDomain: "todo-list-805a8.firebaseapp.com",
    databaseURL: "https://todo-list-805a8.firebaseio.com",
    projectId: "todo-list-805a8",
    storageBucket: "todo-list-805a8.appspot.com",
    messagingSenderId: "591234763857",
    appId: "1:591234763857:web:f01a52a9d7e141b468fc70",
    measurementId: "G-0LRJ6VL0GF"
  });

  const db = firebaseApp.firestore();
  export default db;
