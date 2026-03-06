import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDj-fghHrTbYLffA8fbcR2P8JSL7gRH7M",
  authDomain: "expense-tracker-b5835.firebaseapp.com",
  projectId: "expense-tracker-b5835",
  storageBucket: "expense-tracker-b5835.firebasestorage.app",
  messagingSenderId: "243509620457",
  appId: "1:243509620457:web:439fe51f55b7349a718a78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);