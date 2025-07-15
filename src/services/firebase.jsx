// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaA0hgz6DQCaLPVlUKa0KuHIG1BHW2Tmw",
  authDomain: "hosthive-apps-dev.firebaseapp.com", //process.env.REACT_FIREBASE_AUTH_DOMAIN,
  projectId: "teambnb-dev",
  storageBucket: "teambnb-dev.appspot.com",
  messagingSenderId: "14016993156",
  appId: "1:14016993156:web:d5ed75597d84e7cc11afd1",
  measurementId: "G-LWXHEEJC2H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Google Analytics
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
