// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTPdZGErWBMYcV7VHvSjC2Q_M0pdljgMg",
  authDomain: "netflixgpt-24211.firebaseapp.com",
  projectId: "netflixgpt-24211",
  storageBucket: "netflixgpt-24211.appspot.com",
  messagingSenderId: "820089689194",
  appId: "1:820089689194:web:c6c610c81d90cb8cb92613",
  measurementId: "G-7P4G4XTW7F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
