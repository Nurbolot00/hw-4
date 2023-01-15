import React from 'react';

import styled from 'styled-components'

const FormInputContainer = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
width: 330px;
`
const Input = styled.input`
height: 30px;
border-radius: 10px;
border: none;
padding: 10px;
outline-color: blue;
font-size: 16px;
margin: 0.5rem;
`

const FormInput = ({id,labelName,inputType,placeholder, ...rest}) => {

    return (
        <FormInputContainer>
            <label htmlFor={id}>{labelName}</label>
            <Input type={inputType} placeholder={placeholder || "..."} id={id} {...rest}/>
        </FormInputContainer>
    );
};

export default FormInput;