import React from 'react';
import styled from 'styled-components'

const ExpenseItemContainer = styled.div`
    border-radius: 10px;
    background-color: dimgrey;
    display: flex;
    margin:  0 auto;
    align-items: center;
    margin-top: 1rem;
    padding: 10px;
    color: white;
`

const ItemDate = styled.p`
width: 15%;
border: 1px solid white;
border-radius: 10px;
margin: 1rem;
background-color: black;
padding: 5px;
`

const ItemTitle = styled.p`
width: 65%;
display: flex;
font-size: 22px;
`

const ItemPrice = styled.p`
width: 15%;
border: 1px solid white;
padding: 10px;
margin: 1rem;
border-radius: 10px;
background-color: #4A016B;
font-weight: 700;
font-size: 18px;
`


 export const ExpenseItem = ({date,title,price}) => {
    

    return (
        <ExpenseItemContainer>           
                 <ItemDate>{date.toString()}</ItemDate>
                 <ItemTitle>{title}</ItemTitle>
                  <ItemPrice>{price} som</ItemPrice>
        </ExpenseItemContainer>
    );
};
