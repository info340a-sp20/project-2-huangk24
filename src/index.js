import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAKk6OwJhjz1V3cCA0f3swiyyx2NUWGJ5E",
  authDomain: "info-340-project-a291f.firebaseapp.com",
  databaseURL: "https://info-340-project-a291f.firebaseio.com",
  projectId: "info-340-project-a291f",
  storageBucket: "info-340-project-a291f.appspot.com",
  messagingSenderId: "576311843510",
  appId: "1:576311843510:web:5cb07be268fa710c832417"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
