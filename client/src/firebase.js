// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "mernestate-fc324.firebaseapp.com",
  projectId: "mernestate-fc324",
  storageBucket: "mernestate-fc324.appspot.com",
  messagingSenderId: "1052921318238",
  appId: "1:1052921318238:web:3ddad65ac7c76fd09d9dcf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);