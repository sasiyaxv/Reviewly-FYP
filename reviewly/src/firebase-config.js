import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// .env file create and store API keys
const firebaseConfig = {
  apiKey: "AIzaSyBE4fMgabidfBpMWORZ53CSJg9uZSOYzIw",
  authDomain: "reviewly-c43dc.firebaseapp.com",
  projectId: "reviewly-c43dc",
  storageBucket: "reviewly-c43dc.appspot.com",
  messagingSenderId: "603257753158",
  appId: "1:603257753158:web:58b5e4836155aab2e2c447",
  measurementId: "G-6BPT0FMRET",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
