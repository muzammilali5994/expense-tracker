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

   let Editid = null;

    const submitBtn = document.getElementById("submitBtn");

     const name = document.getElementById("name");
    const amount = document.getElementById("amount");
    const expenseType = document.getElementById("expense-type");
    const date = document.getElementById("date");

    

    //fetch data in table

    const tableBody = document.getElementById("tableBody");
    let Texpense = document.getElementById("expense");
    let Tincome  = document.getElementById("income");
  
    onSnapshot(collection(db,"expensetracker"),(sndata)=>{
      tableBody.innerHTML = "";
      let TotalExpense = "";
      let TotalIncome = "";
      sndata.forEach((x) => {
        tableBody.innerHTML += `
          <tr>
          <td>${x.data().name}</td>
          <td>${x.data().amount}</td>
          <td>${x.data().expenseType}</td>
          <td>${x.data().date}</td>
          <td><button class="editBtn" data-id="${x.id}">Edit</button></td>
          <td><button class="delBtn" data-id="${x.id}">Delete</button></td>
          </tr>
    
        `
        if(x.data().expenseType === "income"){
          TotalIncome += x.data().amount
        }
        else{
          TotalExpense += x.data().amount
        }

        Texpense.innerText = TotalExpense;
        Tincome.innerText = TotalIncome;
      });    
    })


    //Delete data in feilds

  
    tableBody.addEventListener("click",function(e){
      if(e.target.classList.contains("delBtn")){
      const id =e.target.dataset.id;
      deleteDoc(doc(db,"expensetracker",id))
      }
    })
  

  //Edit Button Work

  tableBody.addEventListener("click",async function(e){
      if(e.target.classList.contains("editBtn")){
      const id =e.target.dataset.id;
      
      Editid = id;

      submitBtn.innerText = "Update Expense"; 
        //get data
      const datafill =await getDoc(doc(db,"expensetracker",id))
      name.value = datafill.data().name;
      amount.value = datafill.data().amount;
      expenseType.value = datafill.data().expenseType;
      date.value  = datafill.data().date;
      }
    })
    
    submitBtn.addEventListener("click",async function AddData(){
      if(Editid){

        
          await updateDoc(doc(db,"expensetracker",Editid),{
            name : name.value,
            amount : amount.value,
            expenseType : expenseType.value,
            date : date.value
          })
          name.value="";
          amount.value="";
          date.value="";

          Editid = null;
          submitBtn.innerText = "Add Expense";
      }
      else{
          
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
          
        })
  

