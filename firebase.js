import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDB12Nfer9eRygm8OzdcJVgX9ZXnz3TjJY",
  authDomain: "rs-burger.firebaseapp.com",
  databaseURL: "https://rs-burger-default-rtdb.firebaseio.com",
  projectId: "rs-burger",
  storageBucket: "rs-burger.firebasestorage.app",
  messagingSenderId: "922015301250",
  appId: "1:922015301250:web:1dc61c8770098c3e08fe9b",
  measurementId: "G-GSFTPNH6JL"
};

// INIT APP
const app = initializeApp(firebaseConfig);

// INIT DATABASE
const db = getDatabase(app);

// TEST WRITE
set(ref(db, "menu/test"), {
  name: "Cheeseburger",
  price: 5
});