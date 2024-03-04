import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCb7AMY1fGjj6FvGBU8egFz9aJ3tVExj4c",
  authDomain: "bolg-d6218.firebaseapp.com",
  projectId: "bolg-d6218",
  storageBucket: "bolg-d6218.appspot.com",
  messagingSenderId: "793903756043",
  appId: "1:793903756043:web:8e3613e9936c11fca0280e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
