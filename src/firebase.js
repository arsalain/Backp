// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAo9cGsw6Tbo9nrbsdXcoVxY0SGWgrJ4L8",
  authDomain: "backpack-b1f98.firebaseapp.com",
  projectId: "backpack-b1f98",
  storageBucket: "backpack-b1f98.appspot.com",
  messagingSenderId: "520329530780",
  appId: "1:520329530780:web:7da6a30492c1a9fa9d0c59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;