// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfqhUCuraCCywdBmB0r5IY2Li5kXcMGFY",
    authDomain: "fir-4574c.firebaseapp.com",
    databaseURL: "https://fir-4574c-default-rtdb.firebaseio.com",
    projectId: "fir-4574c",
    storageBucket: "fir-4574c.appspot.com",
    messagingSenderId: "1053071283939",
    appId: "1:1053071283939:web:ea0814ad0efd9cf18557d6",
    measurementId: "G-RLY337755W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
