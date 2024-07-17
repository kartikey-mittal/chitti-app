// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKRei9FPVFzOStQwK3qPlnYo_cLLMdLsM",
    authDomain: "chitti-2cf44.firebaseapp.com",
    projectId: "chitti-2cf44",
    storageBucket: "chitti-2cf44.appspot.com",
    messagingSenderId: "861230555426",
    appId: "1:861230555426:web:9f1b60312c9010bf6fc57b"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); // Get Storage instance

export { db, collection, storage, ref, uploadBytes, getDownloadURL }; 