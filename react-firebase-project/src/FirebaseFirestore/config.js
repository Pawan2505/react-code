import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZ25VdMgv2TI8efYLQBT3eRvS0BFujCL0",
  authDomain: "crudfirebase-e88f7.firebaseapp.com",
  projectId: "crudfirebase-e88f7",
  storageBucket: "crudfirebase-e88f7.appspot.com",
  messagingSenderId: "103209997481",
  appId: "1:103209997481:web:23cde2712bb3fcb35245b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
