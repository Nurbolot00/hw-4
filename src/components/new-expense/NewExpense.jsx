import React from 'react';
import { useState } from 'react';
import { ExpenseForm } from '../expense-form/ExpenseForm';
import Button from '../UI/button/Button';
import "./NewExpense.css"


export  const NewExpense = ({onNewExpenseAdd}) => {

    const [showForm, setShowForm] = useState(false)
   
    const showExpenseForm = () =>{
        setShowForm((prevState)=> {
            // console.log("djsfkljshlkf", !prevState);
           return !prevState

        } )
        // console.log("hadsfkjhaskd");
    }


    return (
        <div className='newExpense'>
            { showForm ? <ExpenseForm onNewExpenseAdd={onNewExpenseAdd} onShowForm = {showExpenseForm}/> : <Button title="Добавить новый расход" onClick={showExpenseForm} />}
        </div>
    );
};

