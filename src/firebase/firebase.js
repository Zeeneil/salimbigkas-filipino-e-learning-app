// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCOX3dLbCghm1ivg7h2nnlrF3hhN8TQX2g',
  authDomain: 'salimbigkas.firebaseapp.com',
  databaseURL: 'https://salimbigkas-default-rtdb.firebaseio.com',
  projectId: 'salimbigkas',
  storageBucket: 'salimbigkas.firebasestorage.app',
  messagingSenderId: '63995274861',
  appId: '1:63995274861:web:4f8baea9d395547ad94164',
  measurementId: 'G-2BK8NK3BVP'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app);

export { app, analytics, auth, db, storage, database };