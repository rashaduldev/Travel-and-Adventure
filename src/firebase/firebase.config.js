// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLf2DpsF9-4T4EeGCZyxKQOTG8h_qGztI",
  authDomain: "travel-and-adventure.firebaseapp.com",
  projectId: "travel-and-adventure",
  storageBucket: "travel-and-adventure.appspot.com",
  messagingSenderId: "343564845379",
  appId: "1:343564845379:web:2d29aebbe74c789dacaff6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;