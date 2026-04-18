import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDB12Nfer9eRygm8OzdcJVgX9ZXnz3TjJY",
  authDomain: "rs-burger.firebaseapp.com",
  databaseURL: "https://rs-burger-default-rtdb.firebaseio.com",
  projectId: "rs-burger",
  storageBucket: "rs-burger.firebaseapp.com",
  messagingSenderId: "922015301250",
  appId: "1:922015301250:web:1dc61c8770098c3e08fe9b"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// FORCE TEST WRITE
set(ref(db, "menu/test"), {
  name: "TEST BURGER",
  price: 10
}).then(() => {
  console.log("Data written successfully");
}).catch((error) => {
  console.log("Error:", error);
});