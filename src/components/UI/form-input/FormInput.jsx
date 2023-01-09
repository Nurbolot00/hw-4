import React from 'react';
import "./FormInput.css"

const FormInput = ({id,labelName,inputType,placeholder, ...rest}) => {
    // console.log("REST", rest);
    return (
        <div className='container'>
            <label htmlFor={id}>{labelName}</label>
            <input type={inputType} placeholder={placeholder || "..."} id={id} {...rest}/>
        </div>
    );
};

export default FormInput;