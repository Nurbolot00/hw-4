import React from "react";
import { useState } from "react";
import Chart from "../chart/Chart";
import { ExpenseItem } from "../expense-item/ExpenseItem";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import "./Expenses.css";

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
    <div className="expenses">
      <ExpensesFilter value={selectedYear} onChange={yearChangeHandler} />
      <Chart items={filteredItems} />
      <ul className="expensesList">
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
      </ul>
    </div>
  );
};
