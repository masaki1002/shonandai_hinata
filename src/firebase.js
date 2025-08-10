import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4W54ENjrMdb9bHfRsdalHdefNkR-aIL0",
  authDomain: "shonandai-hinata.firebaseapp.com",
  projectId: "shonandai-hinata",
  storageBucket: "shonandai-hinata.firebasestorage.app",
  messagingSenderId: "547495589337",
  appId: "1:547495589337:web:d76a5db8ff363166d015c8",
  measurementId: "G-LG7PKGYQVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { analytics, db }