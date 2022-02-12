import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.form`
     label {
        text-transform: capitalize;
    }
`;

const Input = ({ value, newEmployee, setNewEmployee}) => {
    console.log('newEmployee:', newEmployee)

    return (
        <InputStyled>
            <label >{value}:</label>
            <input type={value === 'number' ? "number": 'text'}
            min={1}  value={newEmployee[value]}
                onChange={(e) => {
                    // setNewEmployee({ ...newEmployee, value???: e.target.value })
                }}
                 />
        </InputStyled>
    )
}

export default Input