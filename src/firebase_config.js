import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB--EnMiH9ZHwrFlxSxhZ-JH4gXfXwCJgs",
    authDomain: "todo-reactjs-e97c9.firebaseapp.com",
    projectId: "todo-reactjs-e97c9",
    storageBucket: "todo-reactjs-e97c9.appspot.com",
    messagingSenderId: "872507535955",
    appId: "1:872507535955:web:cab017d824159cdc178ca6"
  };


firebase.initializeApp(firebaseConfig);

// const db=firebase.firestore();
const db=firebase.firestore();

export {db};