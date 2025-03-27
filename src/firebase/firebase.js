// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOX3dLbCghm1ivg7h2nnlrF3hhN8TQX2g",
  authDomain: "salimbigkas.firebaseapp.com",
  databaseURL: "https://salimbigkas-default-rtdb.firebaseio.com",
  projectId: "salimbigkas",
  storageBucket: "salimbigkas.firebasestorage.app",
  messagingSenderId: "63995274861",
  appId: "1:63995274861:web:4f8baea9d395547ad94164",
  measurementId: "G-2BK8NK3BVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);