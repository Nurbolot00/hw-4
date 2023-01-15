import React from "react";
import ChartBar from "../chart-bar/ChartBar";
import styled from 'styled-components'

const Container  = styled.div `

  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dFFF;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
  margin: 0 auto;

`

const Chart = ({items}) => {
  const maximumPrice = 2000;
  const months = [
    {
      label: "Янв",
      currentPrice: 0,
    },
    {
      label: "Фев",
      currentPrice: 0,
    },
    {
      label: "Март",
      currentPrice: 0,
    },
    {
      label: "Апр",
      currentPrice: 0,
    },
    {
      label: "Май",
      currentPrice: 0,
    },
    {
      label: "Июнь",
      currentPrice: 0,
    },
    {
      label: "Июль",
      currentPrice: 0,
    },
    {
      label: "Авг",
      currentPrice: 0,
    },
    {
      label: "Сен",
      currentPrice: 0,
    },
    {
      label: "Окт",
      currentPrice: 0,
    },
    {
      label: "Нояб",
      currentPrice: 0,
    },
    {
      label: "Дек",
      currentPrice: 0,
    },
  ];

  console.log(new Date().getMonth());

  items.forEach((item) => {
    const monthNumber = new Date(item.date).getMonth();
    months[monthNumber].currentPrice += item.price;
  });

  console.log(months);

  return (
    <Container>
      {months.map((item) => {
        return (
          <ChartBar
            key={item.label}
            label={item.label}
            currentPrice={item.currentPrice}
            maximumPrice={maximumPrice}
          />
        );
      })}
    </Container>
  );
};

export default Chart;
