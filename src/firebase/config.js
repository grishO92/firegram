import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyA0ZwytfrzO-ZPT2f9kDOPjwB7N_dZ38z4',
  authDomain: 'the-gallery-project.firebaseapp.com',
  databaseURL: 'https://the-gallery-project.firebaseapp.com',
  projectId: 'the-gallery-project',
  storageBucket: 'the-gallery-project.appspot.com',
  messagingSenderId: '347229057413',
  appId: '1:347229057413:web:2d21129726a420768894ec',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
