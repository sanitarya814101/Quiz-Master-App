import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA6scKggjJDCS-3Xsel2O8jhdeazCJ6PO0",
    authDomain: "wireless-buzzer-app-2021-7b9df.firebaseapp.com",
    databaseURL:"https://wireless-buzzer-app-2021-7b9df-default-rtdb.firebaseio.com",
    projectId: "wireless-buzzer-app-2021-7b9df",
    storageBucket: "wireless-buzzer-app-2021-7b9df.appspot.com",
    messagingSenderId: "540249070075",
    appId: "1:540249070075:web:6307dcccbad44c24d8535e",
    measurementId: "G-8Z3F3DJLY4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();