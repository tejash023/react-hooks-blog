// JavaScript
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0x6We6yRivKBCEQHj0_nnpumIOffYd4U",
  authDomain: "react-hooks-blog-app-e35c4.firebaseapp.com",
  projectId: "react-hooks-blog-app-e35c4",
  storageBucket: "react-hooks-blog-app-e35c4.appspot.com",
  messagingSenderId: "375928316877",
  appId: "1:375928316877:web:475591e85da00b69e81a84"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}


