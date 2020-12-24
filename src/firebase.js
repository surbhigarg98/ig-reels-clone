import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyByRNggfdaurtePGeJbNh-2JOYRsc7N_6Y",
    authDomain: "ig-reels-clone-4b4bc.firebaseapp.com",
    projectId: "ig-reels-clone-4b4bc",
    storageBucket: "ig-reels-clone-4b4bc.appspot.com",
    messagingSenderId: "61291953055",
    appId: "1:61291953055:web:7d03835f8cc503b09e9baa",
    measurementId: "G-6Z575JCMHH"
  });

  const db = firebaseApp.firestore();

  export {db};