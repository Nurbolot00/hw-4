import React from 'react';
import {ExpenseItem} from '../expense-item/ExpenseItem';
import "./Expenses.css"

export const Expenses = ({expenses}) => {
    return (
        <ul className='expensesList'>
            {expenses.map((elem,index)=>{
                return( 
                <ExpenseItem key={index} title={elem.title} price={elem.price} date={elem.date}/>
                )
            })}
        </ul>
    );
};

