import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyANTiPxAXHH21TbPwBKZ1feWAbhsCmIcu0",
  authDomain: "tienda-basquet.firebaseapp.com",
  projectId: "tienda-basquet",
  storageBucket: "tienda-basquet.appspot.com",
  messagingSenderId: "328275183079",
  appId: "1:328275183079:web:f02cf77833862de9d8e942"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);