// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAp3LA0xFfLI9Roa5g3cOGdxHk-6Y3fksA",
    authDomain: "movies-authentication-74f2f.firebaseapp.com",
    projectId: "movies-authentication-74f2f",
    storageBucket: "movies-authentication-74f2f.firebasestorage.app",
    messagingSenderId: "767469028636",
    appId: "1:767469028636:web:2419dc042aeff562f126d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;