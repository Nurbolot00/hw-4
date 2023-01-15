import React from 'react';
import { useState } from 'react';
import { ExpenseForm } from '../expense-form/ExpenseForm';
import Button from '../UI/button/Button';
import styled from 'styled-components'

const NewExpenseContainer = styled.div`
border-radius: 10px;
padding: 30px;
background-color: #AD9BE9;
width: 50%;
margin:  0 auto;
margin-top: 1rem;
margin-bottom: 2rem;
`


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
        <NewExpenseContainer>
            { showForm ? <ExpenseForm onNewExpenseAdd={onNewExpenseAdd} onShowForm = {showExpenseForm}/> : <Button title="Добавить новый расход" onClick={showExpenseForm} />}
        </NewExpenseContainer>
    );
};

