// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBq89UGl4ZVQmA7iPfQ0FESxxC2KtKCdQU",
//   authDomain: "fir-realtime-1efd5.firebaseapp.com",
//   databaseURL: "https://fir-realtime-1efd5-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "fir-realtime-1efd5",
//   storageBucket: "fir-realtime-1efd5.appspot.com",
//   messagingSenderId: "529815773041",
//   appId: "1:529815773041:web:a25072279ba95d5cbe60d0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // export const db = getDatabase(app)
// const auth = getAuth(app)
// export default auth
// // export { auth, db }

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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
const auth = getAuth(app)
export { db, auth }