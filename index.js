import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import { getFirestore , doc ,collection,onSnapshot, setDoc,addDoc, updateDoc , deleteDoc, getDoc} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";


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

     const name = document.getElementById("name");
    const amount = document.getElementById("amount");
    const expenseType = document.getElementById("expense-type");
    const date = document.getElementById("date");

    submitBtn.addEventListener("click",addData)
   
        async function addData() {
            await addDoc(collection(db,"expensetracker"),{
                name:name.value,
                amount:amount.value,
                expenseType:expenseType.value,
                date:date.value
            })
            name.value="";
            amount.value="";
            date.value="";
    }

    //fetch data in table

    const tableBody = document.getElementById("tableBody");

  
    onSnapshot(collection(db,"expensetracker"),(sndata)=>{
      tableBody.innerHTML = "";
      sndata.forEach((x) => {
        tableBody.innerHTML += `
          <tr>
          <td>${x.data().name}</td>
          <td>${x.data().amount}</td>
          <td>${x.data().expenseType}</td>
          <td>${x.data().date}</td>
          <td><button onclick="edit()">Edit</button></td>
          <td><button class="delBtn" data-id="${x.id}">Delete</button></td>
          </tr>
    
        `
      });    
    })


    //get data in feilds

  
    tableBody.addEventListener("click",function(e){
      if(e.target.classList.contains("delBtn")){
      const id =e.target.dataset.id;
      deleteDoc(doc(db,"expensetracker",id))
      }
    })
  
    

