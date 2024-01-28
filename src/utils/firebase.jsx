// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiwxtb5PDLv2t4e6H_YejYw5f3sXESm64",
  authDomain: "netflix-clone-f89b5.firebaseapp.com",
  projectId: "netflix-clone-f89b5",
  storageBucket: "netflix-clone-f89b5.appspot.com",
  messagingSenderId: "985671585585",
  appId: "1:985671585585:web:12b132ef0fd0e3713c2a10",
  measurementId: "G-3YBYY457W5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();