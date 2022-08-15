// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsUiHnIAdB1ybIQZldAo7VGAn_ZBCq7DM",
  authDomain: "maratona-slack-7bdc5.firebaseapp.com",
  projectId: "maratona-slack-7bdc5",
  storageBucket: "maratona-slack-7bdc5.appspot.com",
  messagingSenderId: "426839239643",
  appId: "1:426839239643:web:6be014a2e8cf9710ef15fe",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
