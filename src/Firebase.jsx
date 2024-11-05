
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";   
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArYBHkF37NcCCsMkkk6MVC-apNSe8MsH0",
    authDomain: "challenge14-a850b.firebaseapp.com",
    projectId: "challenge14-a850b",
    storageBucket: "challenge14-a850b.firebasestorage.app",
    messagingSenderId: "7878452055",
    appId: "1:7878452055:web:0b02cc5d2b181cacf35412",
    measurementId: "G-QTZQPC1GVC"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
