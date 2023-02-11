import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0x6We6yRivKBCEQHj0_nnpumIOffYd4U",
  authDomain: "react-hooks-blog-app-e35c4.firebaseapp.com",
  projectId: "react-hooks-blog-app-e35c4",
  storageBucket: "react-hooks-blog-app-e35c4.appspot.com",
  messagingSenderId: "375928316877",
  appId: "1:375928316877:web:475591e85da00b69e81a84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = firebase.firestore();