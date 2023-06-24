// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8eDES7XEVphfWQ5nLT7lvMm0lr1UaZuQ",
  authDomain: "the-dragon-news-4b01d.firebaseapp.com",
  projectId: "the-dragon-news-4b01d",
  storageBucket: "the-dragon-news-4b01d.appspot.com",
  messagingSenderId: "646273946310",
  appId: "1:646273946310:web:3713044c493c61ecdfbdc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;