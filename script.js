// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtoZXTV0yhT4G5mZAT-4-9EP3Cdv1pqnQ",
  authDomain: "simplechat-8d876.firebaseapp.com",
  projectId: "simplechat-8d876",
  storageBucket: "simplechat-8d876.firebasestorage.app",
  messagingSenderId: "763791658945",
  appId: "1:763791658945:web:e5366df7b7c19a1f592940",
  measurementId: "G-J5LSSBJ50Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
