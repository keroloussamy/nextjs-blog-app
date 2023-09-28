// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextjs-blog-app-399415.firebaseapp.com",
  projectId: "nextjs-blog-app-399415",
  storageBucket: "nextjs-blog-app-399415.appspot.com",
  messagingSenderId: "788609382899",
  appId: "1:788609382899:web:7e569833f6ca58a762fa86"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);