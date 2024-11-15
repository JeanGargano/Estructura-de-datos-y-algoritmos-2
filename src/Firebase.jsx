import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkVgZcx8BNRR20p94B15K1IJCAzGruzUU",
  authDomain: "database-1d745.firebaseapp.com",
  databaseURL: "https://database-1d745-default-rtdb.firebaseio.com",
  projectId: "database-1d745",
  storageBucket: "database-1d745.appspot.com",
  messagingSenderId: "1099170853290",
  appId: "1:1099170853290:web:de483009c8cfa991367bd3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
