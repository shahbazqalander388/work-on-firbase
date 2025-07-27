
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  import { getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCmbAUomD_wcX4Lzb__Mx5teV7FJurxAYk",
    authDomain: "demo2-2c591.firebaseapp.com",
    projectId: "demo2-2c591",
    storageBucket: "demo2-2c591.firebasestorage.app",
    messagingSenderId: "699901197154",
    appId: "1:699901197154:web:5d9726907e01f117e00a3b",
    measurementId: "G-JFTXYH5Z8P"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
console.log("its intalize sucsess");
const auth = getAuth(app);
console.log(auth);
const email=document.querySelector("#email")
const passwaord=document.querySelector("#password");
let btn=document.querySelector(".btn");
btn.addEventListener("click",user)
function user(){
  const email=email.value;
  const passwaord=passwaord.value;
  console.log(email,passwaord);
  createUserWithEmailAndPassword(auth,email,passwaord)
   .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  
}
// async function createUser(email,passwaord) {
//     try{
//         const usercredential=await createUserWithEmailAndPassword(auth,email,passwaord)
//         const user=usercredential.user;
//         console.log("user created succesfully",user);
        
//     }
//     catch(error){
//         console.error("error creating user",user)
//     }
    
// }
// createUser("abc222222@gamil.com","12345678");

