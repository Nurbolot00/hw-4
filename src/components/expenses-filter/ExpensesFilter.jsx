import React from 'react';
import styled from 'styled-components'

const ExpenseFilterContainer = styled.div`
color: white;
padding: 0;
margin: 0 auto;
margin-bottom: 1rem;
`

const ExpenseFilterControl = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;
`

const SelectYears = styled.select`
    border-radius: 10px;
    border: none;
    padding: 10px 18px;
    outline-color: blue;
    font-size: 16px;
    margin: 0.5rem;
    outline: none;
`

const ExpensesFilter = ({value,onChange}) => {
    return (
        <ExpenseFilterContainer>
            <ExpenseFilterControl>
                <label htmlFor="years">Фильтровать по году</label>
                <SelectYears value={value} onChange={onChange} name="years">
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </SelectYears>

            </ExpenseFilterControl>
            
        </ExpenseFilterContainer>
    );
};

export default ExpensesFilter;