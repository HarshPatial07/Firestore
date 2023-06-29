// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwcHxMRjhVHjkQKb7oWQzENvLvdoyRICk",
  authDomain: "facebook-auth-40287.firebaseapp.com",
  projectId: "facebook-auth-40287",
  storageBucket: "facebook-auth-40287.appspot.com",
  messagingSenderId: "978946831733",
  appId: "1:978946831733:web:a5af727c4c1e9eeb114f3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider =new FacebookAuthProvider();
const firestore = getFirestore(app);

export {auth, provider, firestore}