import firebase from "firebase";
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCDm2zbOqaTKEe0u1M6hP8rtGwX_thl7W0",
    authDomain: "e-library-60e33.firebaseapp.com",
    projectId: "e-library-60e33",
    storageBucket: "e-library-60e33.appspot.com",
    messagingSenderId: "761083524316",
    appId: "1:761083524316:web:14846508979269c07cb019"
  };
  
  // Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig); 
  }


export default firebase.firestore()