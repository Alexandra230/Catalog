import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDuCsaAVBZPTiEi1pp0322QE15Nk-GyG3M',
  authDomain: 'catalog-d2e56.firebaseapp.com',
  projectId: 'catalog-d2e56',
  storageBucket: 'catalog-d2e56.appspot.com',
  messagingSenderId: '845125131272',
  appId: '1:845125131272:web:388d7d7055f3b8842585bd',
  measurementId: 'G-C4JVWXJ9VP',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
