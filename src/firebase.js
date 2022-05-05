import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHPlDkqvJFBIHn0ITKEdBK3LZr60vTxjc",
  authDomain: "discord-clone-8bc05.firebaseapp.com",
  projectId: "discord-clone-8bc05",
  storageBucket: "discord-clone-8bc05.appspot.com",
  messagingSenderId: "540060731038",
  appId: "1:540060731038:web:4b6bc50a28efa85b715d8f",
  measurementId: "G-KG5PND74CS",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

//provider is an instance of GoogleAuthProvide
//auth is the interface of firebase auth servie
const auth = getAuth();
console.log(provider);
console.log(auth);

export { provider, auth };
export default db;
