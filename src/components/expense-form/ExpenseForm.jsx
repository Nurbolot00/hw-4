import React from "react";
import { useState } from "react";
import Button from "../UI/button/Button";
import FormInput from "../UI/form-input/FormInput";
import styled from 'styled-components'


 const TopInputsContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 `
 const DateInputContainer = styled.div`
 width: 50%;
 display: flex;
 flex-wrap: wrap;
 `
 const FormButtonsContainer = styled.div`
 display: flex;
 justify-content: flex-end;
 flex-wrap: wrap;
 `

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
    const value = event.target.value;
    if (value.charAt(0) !== "-") setPrice(event.target.value); // 'e'
  };

  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value); // 'e'
  };

  const dateInputChangeHandler = (event) => {
    setDate(event.target.value); // 'e'
  };

  const SaveHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title,
      date,
      price,
    };


    props.onNewExpenseAdd(expenseData);

    setDate("");
    setPrice("");
    setTitle("");
  };

  return (
    <form className="newExpenseForm" action="">
      <TopInputsContainer>
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
      </TopInputsContainer>

      <DateInputContainer>
        <FormInput
          onChange={dateInputChangeHandler}
          value={date}
          id="date"
          labelName="Дата"
          inputType="date"
          placeholder="дд.мм.гггг"
        />
      </DateInputContainer>
      
      <FormButtonsContainer>
        <Button title="Отмена" onClick={cancelHanlder} />
        <Button title="Сохранить" onClick={SaveHandler} disabled={!enabled} />
      </FormButtonsContainer>
    </form>
  );
};
