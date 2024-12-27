// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-756b0.firebaseapp.com",
  projectId: "mern-estate-756b0",
  storageBucket: "mern-estate-756b0.firebasestorage.app",
  messagingSenderId: "38022239646",
  appId: "1:38022239646:web:e32b2421513ad8c86d728f",
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);