import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCzMJaSfipnofG2bludX56X9zzwGu5uog",
    authDomain: "relief-aid-network.firebaseapp.com",
    projectId: "relief-aid-network",
    storageBucket: "relief-aid-network.firebasestorage.app",
    messagingSenderId: "303199756112",
    appId: "1:303199756112:web:760bedb036350ed6e2d655",
    measurementId: "G-72Q6MD4W9X"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };