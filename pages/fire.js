import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBfh0Aml4GSHZQi3K4Xi83ylDf7PwEeVXw",
  authDomain: "homeschoolzen-nonprod-d0c01.firebaseapp.com",
  projectId: "homeschoolzen-nonprod-d0c01",
  storageBucket: "homeschoolzen-nonprod-d0c01.appspot.com",
  messagingSenderId: "929662484003",
  appId: "1:929662484003:web:9082bc75d39037eeb53b96",
  measurementId: "G-FNWW8R5YJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);