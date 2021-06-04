import firbase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwCO_eiDpy3p7xbDsi3fqKmMhu576fBTM",
  authDomain: "adityakumar-moodtracker.firebaseapp.com",
  projectId: "adityakumar-moodtracker",
  storageBucket: "adityakumar-moodtracker.appspot.com",
  messagingSenderId: "147297659329",
  appId: "1:147297659329:web:174880d64d231d19d9e740",
  measurementId: "G-1R23DV4BBJ",
};

firbase.initializeApp(firebaseConfig);
export default firbase;
