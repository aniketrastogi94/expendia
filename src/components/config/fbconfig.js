import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
  apiKey: "AIzaSyDkZP6P6QSg2jX5GccfuvT8QiftJ2TWVy0",
  authDomain: "expendia.firebaseapp.com",
  databaseURL: "https://expendia.firebaseio.com",
  projectId: "expendia",
  storageBucket: "expendia.appspot.com",
  messagingSenderId: "749656790784",
  appId: "1:749656790784:web:a0a064e5ccdafed99d05e5",
  measurementId: "G-RVHZG9RELB"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase ;