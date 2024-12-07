import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

 
const firebaseConfig = {
  apiKey: "AIzaSyBLdPebcAwMH9l15Vn0itsD9que1rTgxn0",
  authDomain: "questmill-1.firebaseapp.com",
  projectId: "questmill-1",
  storageBucket: "questmill-1.firebasestorage.app",
  messagingSenderId: "234947344994",
  appId: "1:234947344994:web:8c0fd5e4d0348b4e6caf3b",
  measurementId: "G-GB454R0M3V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };