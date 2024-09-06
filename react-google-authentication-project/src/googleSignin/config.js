
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgX3lQiDedYecj3JzPTkbP1E9SQrEhf2U",
  authDomain: "authentication-ecd13.firebaseapp.com",
  projectId: "authentication-ecd13",
  storageBucket: "authentication-ecd13.appspot.com",
  messagingSenderId: "114061743410",
  appId: "1:114061743410:web:b1fcddaacc96152565332b",
  measurementId: "G-3MLKZNGN0G"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};

