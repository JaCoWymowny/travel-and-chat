import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBiuf832P1zJN-oFiIIay2VCFcGk_yXCE4",
  projectId: "wycieczki-b5bb8",
  databaseURL: "https://wycieczki-b5bb8-default-rtdb.firebaseio.com/",
  authDomain: "wycieczki-b5bb8.firebaseapp.com",
  storageBucket: "wycieczki-b5bb8.appspot.com",
  messagingSenderId: "681525263478",
  appId: "1:681525263478:web:d11ea8edfc8cc29b68b357",
  measurementId: "G-569SJQN1SJ",
};

export const app = initializeApp(firebaseConfig);
