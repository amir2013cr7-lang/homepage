import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDB12Nfer9eRygm8OzdcJVgX9ZXnz3TjJY",
  authDomain: "rs-burger.firebaseapp.com",
  databaseURL: "https://rs-burger-default-rtdb.firebaseio.com",
  projectId: "rs-burger",
  storageBucket: "rs-burger.firebaseapp.com",
  messagingSenderId: "922015301250",
  appId: "1:922015301250:web:1dc61c8770098c3e08fe9b"
};

// INIT
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ===============================
// 1. WRITE TEST DATA
// ===============================
set(ref(db, "menu/test"), {
  name: "TEST BURGER",
  price: 10
})
.then(() => {
  console.log("✅ Data written successfully");
})
.catch((error) => {
  console.log("❌ Error:", error);
});

// ===============================
// 2. READ DATA + SHOW ON PAGE
// ===============================
get(child(ref(db), "menu")).then((snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val();

    console.log("📦 MENU DATA:", data);

    // SHOW ON WEBSITE
    document.body.innerHTML += `
      <div style="padding:20px;font-family:sans-serif">
        <h2>🍔 ${data.test.name}</h2>
        <p>💰 Price: $${data.test.price}</p>
      </div>
    `;
  } else {
    console.log("No data found");
  }
});