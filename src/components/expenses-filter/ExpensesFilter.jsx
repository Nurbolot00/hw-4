import React from 'react';
import './ExpensesFilter.css'

const ExpensesFilter = ({value,onChange}) => {
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label htmlFor="years">Фильтровать по году</label>
                <select value={value} onChange={onChange} name="years" id="select-year">
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>

            </div>
            
        </div>
    );
};

export default ExpensesFilter;