import React from "react";
import { useState } from "react";
import Chart from "../chart/Chart";
import { ExpenseItem } from "../expense-item/ExpenseItem";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import styled from 'styled-components'


const ExpensesContainer = styled.div`
padding: 2rem;
background-color: black;
width: 50%;
margin: 0 auto;
border-radius: 12px;
`

const UlExpensesList = styled.ul`
padding: 20px ;
border: 1pz solid violet;
border-radius: 15px;
margin: 0 auto;
background-color: black;
`

export const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectYear] = useState("2022");

  const yearChangeHandler = (event) => {
    setSelectYear(event.target.value);
  };

  
  const filteredItems = expenses.filter((element) => {
    const stringifiedYear = new Date(element.date).getFullYear().toString();
    return stringifiedYear === selectedYear;
  });
  console.log(filteredItems);
  return (
    <ExpensesContainer>
      <ExpensesFilter value={selectedYear} onChange={yearChangeHandler} />
      <Chart items={filteredItems} />
      <UlExpensesList>
        {filteredItems.map((elem, index) => {
          return (
            <ExpenseItem
              key={index}
              title={elem.title}
              price={elem.price}
              date={elem.date}
            />
          );
        })}
      </UlExpensesList>
    </ExpensesContainer>
  );
};
