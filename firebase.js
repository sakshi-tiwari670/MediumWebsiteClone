import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDb0Dvr0L5NIuN3V2Y7Q4Kl9LaVusvHsoQ',
  authDomain: 'medium-clone-10269.firebaseapp.com',
  projectId: 'medium-clone-10269',
  storageBucket: 'medium-clone-10269.appspot.com',
  messagingSenderId: '542812732222',
  appId: '1:542812732222:web:cf5d2524934e22f2234a6f',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
