import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI63JFLc5aMVeZFPAha30PIbP_IePKk-E",
  authDomain: "reactjs-60810-nl-c2fb6.firebaseapp.com",
  projectId: "reactjs-60810-nl-c2fb6",
  storageBucket: "reactjs-60810-nl-c2fb6.appspot.com",
  messagingSenderId: "512436413020",
  appId: "1:512436413020:web:b4a1ace4482587b38dfc99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
