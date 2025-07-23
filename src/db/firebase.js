// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXtc1fgZIKLSJ1nL9c0-_57S0hGtKdPnw",
  authDomain: "mochi-tienda.firebaseapp.com",
  projectId: "mochi-tienda",
  storageBucket: "mochi-tienda.firebasestorage.app",
  messagingSenderId: "403574320684",
  appId: "1:403574320684:web:91a2e734fde3344e3aab89",
  measurementId: "G-WPVTTNMN7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();

export default db;