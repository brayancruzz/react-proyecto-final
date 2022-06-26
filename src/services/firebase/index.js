import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBIgOP8jk0gnk2dV3G-j74_Mx4sG0R5joQ",
  authDomain: "proyecto-reactjs-coderho-89588.firebaseapp.com",
  projectId: "proyecto-reactjs-coderho-89588",
  storageBucket: "proyecto-reactjs-coderho-89588.appspot.com",
  messagingSenderId: "504213396106",
  appId: "1:504213396106:web:25d12e62eb4bc5e9396b73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)