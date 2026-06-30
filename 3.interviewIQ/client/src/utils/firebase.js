
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBmeKsxLgiJyc__nPq4MFxB6yV9s4iwCI8",
  authDomain: "interview-agent-119c1.firebaseapp.com",
  projectId: "interview-agent-119c1",
  storageBucket: "interview-agent-119c1.firebasestorage.app",
  messagingSenderId: "252157116127",
  appId: "1:252157116127:web:b34e25751bb7846125736a",
  measurementId: "G-RDG2GSGFJ6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
