// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBoRismOzh9P_t-Awi2nfjpgSdtqf-MO0",
  authDomain: "proyecto-final--reactjs.firebaseapp.com",
  projectId: "proyecto-final--reactjs",
  storageBucket: "proyecto-final--reactjs.appspot.com",
  messagingSenderId: "36567792706",
  appId: "1:36567792706:web:697338c0636cd518a4c1db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);