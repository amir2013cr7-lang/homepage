// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB12Nfer9eRygm8OzdcJVgX9ZXnz3TjJY",
  authDomain: "rs-burger.firebaseapp.com",
  projectId: "rs-burger",
  storageBucket: "rs-burger.firebasestorage.app",
  messagingSenderId: "922015301250",
  appId: "1:922015301250:web:1dc61c8770098c3e08fe9b",
  measurementId: "G-GSFTPNH6JL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);