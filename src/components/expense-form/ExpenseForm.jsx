import React from "react";
import { useState } from "react";
import Button from "../UI/button/Button";
import FormInput from "../UI/form-input/FormInput";
import "./ExpenseForm.css";

export const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(10);
  const [date, setDate] = useState("");

  const enabled = title.length > 0 && price.length > 0 && date.length > 0;

  const cancelHanlder = (event) => {
    event.preventDefault();
    props.onShowForm();
  };

  const priceInputChangeHandler = (event) => {
    // console.log(event.target.value);

    const value = event.target.value;
    if (value.charAt(0) !== "-") setPrice(event.target.value); // 'e'
  };

  const titleInputChangeHandler = (event) => {
    // console.log(event.target.value);
    setTitle(event.target.value); // 'e'
  };

  const dateInputChangeHandler = (event) => {
    // console.log(event.target.value);
    setDate(event.target.value); // 'e'
  };

  const SaveHandler = (event) => {
    event.preventDefault();
    // const titleInput = document.getElementById("name")
    // const priceInput = document.getElementById("price")
    // const dateInput = document.getElementById("date")
    const expenseData = {
      title,
      date,
      price,
    };
    // console.log(expenseData);

    props.onNewExpenseAdd(expenseData);

    setDate("");
    setPrice("");
    setTitle("");
  };

  return (
    <form className="newExpenseForm" action="">
      <div className="top-inputs">
        <FormInput
          onChange={titleInputChangeHandler}
          value={title}
          id="name"
          labelName="Назввание"
          inputType="text"
          placeholder="Введите название"
        />

        <FormInput
          onChange={priceInputChangeHandler}
          value={price}
          id="price"
          labelName="Сумма"
          inputType="number"
          placeholder="Введите сумму"
        />
      </div>
      <div className="dateInput">
        <FormInput
          onChange={dateInputChangeHandler}
          value={date}
          id="date"
          labelName="Дата"
          inputType="date"
          placeholder="дд.мм.гггг"
        />
      </div>
      <div className="formButtons">
        <Button title="Отмена" onClick={cancelHanlder} />
        <Button title="Сохранить" onClick={SaveHandler} disabled={!enabled} />
      </div>
    </form>
  );
};
