// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxsiUBJ1quDFkqKmis0fcPi9vfeCoaDSA",
  authDomain: "loginn-auth.firebaseapp.com",
  projectId: "loginn-auth",
  storageBucket: "loginn-auth.firebasestorage.app",
  messagingSenderId: "193415795817",
  appId: "1:193415795817:web:acf8f0453ddddee2e43ef8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
