import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import { getFirestore , doc ,collection, setDoc,addDoc, updateDoc , deleteDoc, getDoc} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";


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



const db = getFirestore(app);

// Add Data

   

    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click",async ()=>{
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
    const expenseType = document.getElementById("expense-type").value;
    const date = document.getElementById("date").value;
        

       
            await addDoc(collection(db,"expensetracker"),{
                name:name,
                amount:amount,
                expenseType:expenseType,
                date:date
            })
    })
    
