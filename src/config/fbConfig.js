import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDBLigS4F3wccB21RrH-zAHA3EgaN7KJOs",
    authDomain: "rapidhire-1f12e.firebaseapp.com",
    databaseURL: "https://rapidhire-1f12e.firebaseio.com",
    projectId: "rapidhire-1f12e",
    storageBucket: "rapidhire-1f12e.appspot.com",
    messagingSenderId: "296263432098"
  };
  firebase.initializeApp(config);

  export default firebase