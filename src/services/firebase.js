// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtrmZR3L2m_8Uy8eju6j1prm2cBtc9VQM",
  authDomain: "signator-f31e7.firebaseapp.com",
  projectId: "signator-f31e7",
  storageBucket: "signator-f31e7.appspot.com",
  messagingSenderId: "514901624482",
  appId: "1:514901624482:web:98c88c84fca9fcdeb379fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore
const firestoreDb = getFirestore(app);
// Initialize Firebase Authentication
const auth = getAuth(app);
// Initialize Cloud Storage
const storage = getStorage(app);


// Export Auth and firestoreDb
export { auth, firestoreDb, storage };