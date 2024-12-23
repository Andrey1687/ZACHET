import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDCtkcXpVNHYmKC-zVD6q6imAqAyELTBTo",
    authDomain: "panto-1eacd.firebaseapp.com",
    projectId: "panto-1eacd",
    storageBucket: "panto-1eacd.appspot.com",
    messagingSenderId: "761879749767",
    appId: "1:761879749767:web:7c04d7d52352ce02ac0422",
    measurementId: "G-6F5CPERVL2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
