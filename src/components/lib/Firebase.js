import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDWdXkNOaeFC4ZQqoc8phbxDOsMibceE8w",
    authDomain: "ires-restaurents.firebaseapp.com",
    projectId: "ires-restaurents",
    storageBucket: "ires-restaurents.appspot.com",
    messagingSenderId: "1057958122274",
    appId: "1:1057958122274:web:e06f8c789dcf874379cb7b",
    measurementId: "G-XWNMEPLT6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);