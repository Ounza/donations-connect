// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyA-S0VNjj0MfGiyneJoZFbh-kUWl6Y4zy4",

  authDomain: "donations-app-ccd8a.firebaseapp.com",

  projectId: "donations-app-ccd8a",

  storageBucket: "donations-app-ccd8a.appspot.com",

  messagingSenderId: "283920647385",

  appId: "1:283920647385:web:ddef2cde4f6fe5ccbf2ac8",

  measurementId: "G-0B0389ZNL8"

};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()