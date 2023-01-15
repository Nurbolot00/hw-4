import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
background-color: #4A016B;
color: white;
padding: 15px 30px;
border-radius: 10px;
border: none;
margin: 0.5rem;
font-size: 16px;

:disabled{
        opacity: 70%;
    }
`

 const Button = (props) => {
    return (
        <StyledButton onClick={props.onClick} disabled={props.disabled}>{props.title} </StyledButton>
    );
};

export default Button;
