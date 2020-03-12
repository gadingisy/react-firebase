 require("firebase/firestore");
 import firebase from "firebase";
 
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "Isi Dengan Key Anda",
    authDomain: "Domain Aplikasi Anda di Firebase",
    databaseURL: "URL Database Anda",
    projectId: "ID Aplikasi",
    storageBucket: "Storage Bucket",
    messagingSenderId: "messaging sender id",
    appId: "aplikasi ID anda"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  export const auth = firebase.auth();
  export const firestore = firebase.firestore
  export default db; //shorthand firebase.auth()