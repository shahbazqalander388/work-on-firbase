import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyC9ssLR_gP4ttpfmNFVPZhZGENZgoZ0Ej0",
  authDomain: "myproject-349d6.firebaseapp.com",
  projectId: "myproject-349d6",
  storageBucket: "myproject-349d6.firebasestorage.app",
  messagingSenderId: "826062809432",
  appId: "1:826062809432:web:6bfd0f3a043655fb1a1d2d",
  measurementId: "G-N2WVT4D99S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 

const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const btn = document.querySelector(".btn");


btn.addEventListener("click", registerUser);

function registerUser() {
  const email = emailInput.value;
  const password = passwordInput.value;

  console.log(email, password);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User created:", user);
      alert("Signup successful!");
    })
    .catch((error) => {
      console.error("Error:", error.code, error.message);
      alert("Signup failed: " + error.message);
    });
}
