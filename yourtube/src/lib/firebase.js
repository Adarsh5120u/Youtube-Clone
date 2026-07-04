// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh0FTcCgsfqWVI_ytYO0REPmn_9GHpbi4",
  authDomain: "clone-eff89.firebaseapp.com",
  projectId: "clone-eff89",
  storageBucket: "clone-eff89.firebasestorage.app",
  messagingSenderId: "442089305314",
  appId: "1:442089305314:web:9f1d81e78944a3d4281abb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
