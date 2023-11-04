import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsR0oJuB8wIpH_mhjOqftcmN8McimSYJA",
  authDomain: "medium-clone-972c3.firebaseapp.com",
  projectId: "medium-clone-972c3",
  storageBucket: "medium-clone-972c3.appspot.com",
  messagingSenderId: "1081932986571",
  appId: "1:1081932986571:web:bfa850db2ca62c70e2c34e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
