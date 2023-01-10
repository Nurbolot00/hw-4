
import { useState } from 'react';
import './App.css';
import { Expenses } from './components/expenses/Expenses';
import { NewExpense } from './components/new-expense/NewExpense';


// const expenses =[
//   {
//     title:"Туалетная бумага",
//     price: "300 som",
//     date: new Date()
//   },
//   {
//     title:"Туалетная бумага",
//     price: "300 som",
//     date: new Date()
//   },
//   {
//     title:"Туалетная бумага",
//     price: "300 som",
//     date: new Date()
//   },
//   {
//     title:"Туалетная бумага",
//     price: "300 som",
//     date: new Date()
//   },
// ]



function App() {
  const [expenses,setExpenses] = useState([
    {
      title:"Телевизор",
      price: "30000",
      date: new Date()
    },
    {
      title:"Туалетная бумага",
      price: "150",
      date: new Date()
    },
    {
      title:"Телефон",
      price: "20000",
      date: new Date()
    },
    
  ])

  const addNewExpenseHandler = (data) =>{
    const updatedExpenses = [...expenses]
    updatedExpenses.push(data)
    setExpenses(updatedExpenses)
  }
  console.log("121221");

  return (
    <div className="App">
      <NewExpense onNewExpenseAdd ={addNewExpenseHandler}/>
      <Expenses expenses={expenses}/>
     
    </div>
  );
}

export default App;


// React

// components
// 1. function
// 2. return jsx
// 3. start with capital letter
// 4. should be noun
// 5. jsx should have one parent element

// spa
// reactive(state, virtual DOM)
//

// declarative
