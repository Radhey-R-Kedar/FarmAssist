// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDKqhEmb8JZlChFJ-LWZhagU7S4GBKVUE",
  authDomain: "farmassist-477e7.firebaseapp.com",
  projectId: "farmassist-477e7",
  storageBucket: "farmassist-477e7.appspot.com",
  messagingSenderId: "89791485343",
  appId: "1:89791485343:web:f151c2ac1ef4b099da19aa",
  measurementId: "G-TWPCJW64PE"
};

// Initialize Firebase

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const analytics = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
