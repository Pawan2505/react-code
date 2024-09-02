// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoEaGTG2rORoyv5udFcGNrB_SAXIkOHPA",
  authDomain: "fir-project-4bc0d.firebaseapp.com",
  projectId: "fir-project-4bc0d",
  storageBucket: "fir-project-4bc0d.appspot.com",
  messagingSenderId: "285306986452",
  appId: "1:285306986452:web:a1373e34c82d97bddf0041",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
