import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import 'firebase/database'
import 'firebase/app'
var config = {
  apiKey: "AIzaSyAiOSak1xAok9Dc6prTTLz4c3Yl3i1a_50",
  authDomain: "euwebsite-113e2.firebaseapp.com",
  databaseURL: "https://euwebsite-113e2.firebaseio.com",
  projectId: "euwebsite-113e2",
  storageBucket: "",
  messagingSenderId: "1012503278080",
  appId: "1:1012503278080:web:2231dfded17c7635"
};
const firebaseApp = firebase.initializeApp(config);

const user = firebaseApp.auth().currentUser
// firebaseApp.database().ref('test').push().set('vivek')

// if(user) {
//   const x = user.user.emailVerified;
//   console.log(`Email Verified: ${x}`)
// }
// else {
//   alert("vivek")
// }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default firebaseApp
