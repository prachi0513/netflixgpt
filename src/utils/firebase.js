// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiosHA12LMs7xyHb1nAEc-ht5RT-p1AQE",
  authDomain: "netflixgpt-5a3fd.firebaseapp.com",
  projectId: "netflixgpt-5a3fd",
  storageBucket: "netflixgpt-5a3fd.appspot.com",
  messagingSenderId: "163954335819",
  appId: "1:163954335819:web:348e9bb29d3ac5fb092dce",
  measurementId: "G-PZ7HDETRM3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
