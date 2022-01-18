import firebase from "firebase";
require('@firebase/firestore')

var firebaseConfig = {
    
  };
  
  // Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig); 
  }


export default firebase.firestore()
