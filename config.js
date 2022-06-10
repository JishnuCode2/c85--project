import firebase from "firebase";
//require("@firebase/firestore");

var firebaseConfig = { 

  apiKey: "AIzaSyBe4yRkHJtiHWUIPHPj_r2sfXGJwj7evXE",
  authDomain: "e-ride-58d45.firebaseapp.com",
  projectId: "e-ride-58d45",
  storageBucket: "e-ride-58d45.appspot.com",
  messagingSenderId: "577018849463",
  appId: "1:577018849463:web:2f3d494e019bf9d34f4532"

};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
