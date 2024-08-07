import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "bonjour-de827.firebaseapp.com",
  projectId: "bonjour-de827",
  storageBucket: "bonjour-de827.appspot.com",
  messagingSenderId: "116185942610",
  appId: "1:116185942610:web:69bd3e067674d58f142d8b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
