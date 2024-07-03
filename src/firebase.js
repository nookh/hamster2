import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Replace with your Firebase configuration
  apiKey: "AIzaSyCSpdeMRi1fyFY1lczdXZ9v7ZYMkdaU5OA",
  authDomain: "hamster-20e90.firebaseapp.com",
  projectId: "hamster-20e90",
  storageBucket: "hamster-20e90.appspot.com",
  messagingSenderId: "862566657650",
  appId: "1:862566657650:web:e05867d566ff2d06581ceb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
