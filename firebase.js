import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

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

get(ref(db, "menu")).then((snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val();

    let html = "<h1>🍔 Menu</h1>";

    // loop sections (burgers, drinks, sides)
    for (let section in data) {
      html += `<h2 style="margin-top:20px;">${section.toUpperCase()}</h2>`;

      const items = data[section];

      // loop items inside section
      for (let item in items) {
        html += `
          <div style="padding:10px;margin:8px;border:1px solid #ccc;border-radius:8px">
            <h3>${items[item].name}</h3>
            <p>Price: $${items[item].price}</p>
          </div>
        `;
      }
    }

    document.body.innerHTML += html;
  }
});