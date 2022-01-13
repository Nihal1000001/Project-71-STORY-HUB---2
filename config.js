import firebase from 'firebase'
require("@firebase/firestore")


const firebaseConfig = {
    apiKey: "AIzaSyBvo58WTvmvjLxCKBUhKvnunEz3YE_l0Lc",
    authDomain: "story-hub-fc77b.firebaseapp.com",
    databaseURL: "https://story-hub-fc77b-default-rtdb.firebaseio.com",
    projectId: "story-hub-fc77b",
    storageBucket: "story-hub-fc77b.appspot.com",
    messagingSenderId: "378192335552",
    appId: "1:378192335552:web:fd7681c6bfb8caf7679325"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default firebase.firestore()