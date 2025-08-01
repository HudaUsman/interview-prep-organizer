import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_oicjBGehHjah_xImAjmalrlW2T3aQHs",
  authDomain: "interview-prep-organizer.firebaseapp.com",
  projectId: "interview-prep-organizer",
  storageBucket: "interview-prep-organizer.appspot.com", // ✅ Fixed
  messagingSenderId: "408700662702",
  appId: "1:408700662702:web:66b625e063d157b53e4e3f",
  measurementId: "G-ZZ781N3RX1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
