// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABd0VcIyN0slfPUKfzPdCIDr1eimfS_os",
  authDomain: "vacatty-4fd8a.firebaseapp.com",
  projectId: "vacatty-4fd8a",
  storageBucket: "vacatty-4fd8a.appspot.com",
  messagingSenderId: "713443284545",
  appId: "1:713443284545:web:0b9d51787f53e599eb98c0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
