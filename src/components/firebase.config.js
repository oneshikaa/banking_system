import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC59xn7C8Y2dYYFh2ZMiK0toXbs1Vb1n0s",
  authDomain: "bank-login-10ed6.firebaseapp.com",
  projectId: "bank-login-10ed6",
  storageBucket: "bank-login-10ed6.appspot.com",
  messagingSenderId: "115924788813",
  appId: "1:115924788813:web:b37f2a6d6bfe9e73c0de04",
  measurementId: "G-G6LWYTT3BX"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)