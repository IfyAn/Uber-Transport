// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtWS6mqlFQSmuigJbe_NZLp0djhF23wJ8",
  authDomain: "uber-transport-140f7.firebaseapp.com",
  projectId: "uber-transport-140f7",
  storageBucket: "uber-transport-140f7.appspot.com",
  messagingSenderId: "1048306970125",
  appId: "1:1048306970125:web:f39069e629731f0924ef44",
  measurementId: "G-Y3BP3GKGRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }