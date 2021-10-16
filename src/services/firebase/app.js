// https://firebase.google.com/docs/web/setup?hl=pt-br
// https://firebase.google.com/docs/database/web/start?hl=pt-br#web-version-9

console.debug("app:firebase");
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhGCNmt7bI44RHoVHTlrrKtX55wyohfOY",
  authDomain: "tis1puc.firebaseapp.com",
  projectId: "tis1puc",
  databaseURL: "https://tis1puc-default-rtdb.firebaseio.com", // Realtime Database
  storageBucket: "tis1puc.appspot.com",
  messagingSenderId: "259785152988",
  appId: "1:259785152988:web:42475483c13a738aaad719",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
console.debug(app);

export default app;
