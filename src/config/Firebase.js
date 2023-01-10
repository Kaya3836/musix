// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC45WNdFi5EcA6WrU1EP8lCVF2xd1o6cAY",
  authDomain: "musix-46e7f.firebaseapp.com",
  projectId: "musix-46e7f",
  storageBucket: "musix-46e7f.appspot.com",
  messagingSenderId: "698606852584",
  appId: "1:698606852584:web:1b54c8b3697c3afc2bec5d",
  measurementId: "G-562YSBMSV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);