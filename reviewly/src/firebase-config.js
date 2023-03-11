import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// .env file create and store API keys
const firebaseConfig = {
  apiKey: "AIzaSyBE4fMgabidfBpMWORZ53CSJg9uZSOYzIw",
  authDomain: "reviewly-c43dc.firebaseapp.com",
  projectId: "reviewly-c43dc",
  storageBucket: "reviewly-c43dc.appspot.com",
  messagingSenderId: "603257753158",
  appId: "1:603257753158:web:58b5e4836155aab2e2c447",
  measurementId: "G-6BPT0FMRET"
}; 

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
