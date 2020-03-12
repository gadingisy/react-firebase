 require("firebase/firestore");
 import firebase from "firebase";
 
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAu-_muBW5T0U2fYXn-aN3n4k1Ht4GcDNQ",
    authDomain: "react-blog-5e4b1.firebaseapp.com",
    databaseURL: "https://react-blog-5e4b1.firebaseio.com",
    projectId: "react-blog-5e4b1",
    storageBucket: "react-blog-5e4b1.appspot.com",
    messagingSenderId: "1086814228748",
    appId: "1:1086814228748:web:f8f2073b43e9a6f1d2f929"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  export const auth = firebase.auth();
  export const firestore = firebase.firestore
  export default db;