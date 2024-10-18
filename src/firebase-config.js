import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4ePbZ7eF2RpQTVhxEAN4Flk4vCSkkXUg",
  authDomain: "zymo-prod.firebaseapp.com",
  databaseURL: "https://zymo-prod-default-rtdb.firebaseio.com",
  projectId: "zymo-prod",
  storageBucket: "zymo-prod.appspot.com",
  messagingSenderId: "34164434278",
  appId: "1:34164434278:web:eb478d1c92e1e430a214a7",
  measurementId: "G-DMTRQ4DDX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
