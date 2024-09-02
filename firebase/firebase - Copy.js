// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5N38yVGVTLzVNK3EHk7-U5n5jvEsb0yQ",
  authDomain: "crud-operation-6.firebaseapp.com",
  projectId: "crud-operation-6",
  storageBucket: "crud-operation-6.appspot.com",
  messagingSenderId: "642671805439",
  appId: "1:642671805439:web:d020dc9bb474d910739dca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db