import React from 'react';
import "./ExpenseItem.css"

 export const ExpenseItem = ({date,title,price}) => {

    return (
        <div className='expenseItem'>
            
                 <p className='item-date'>{date.toString()}</p>
                 <p className='item-title'>{title}</p>
         

           
                  <p className='item-price'>{price} som</p>
            

        </div>
    );
};
