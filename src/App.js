
import { useState } from 'react';
import './App.css';
import { Expenses } from './components/expenses/Expenses';
import { NewExpense } from './components/new-expense/NewExpense';


function App() {
  const [expenses,setExpenses] = useState([
    {
      title:"Телевизор",
      price: 300,
      date: new Date(2022,3,9)
    },
    {
      title:"Туалетная бумага",
      price: 150,
      date: new Date(2023,5,19)
    },
    {
      title:"Телефон",
      price: 200,
      date: new Date(2021,8,5)
    },
    {
      title:"Тапки",
      price: 600,
      date: new Date(2020,2,11)
    },
    {
      title:"Одежда",
      price: 1000,
      date: new Date(2022,4,6)
    },
    {
      title:"Кварт-плата",
      price: 500,
      date: new Date(2021,1,7)
    },
    {
      title:"Наушники",
      price: 400,
      date: new Date(2019,5,24)
    },
    
  ])

  const addNewExpenseHandler = (data) =>{
    const updatedExpenses = [...expenses]
    updatedExpenses.push(data)
    setExpenses(updatedExpenses)
  }

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
