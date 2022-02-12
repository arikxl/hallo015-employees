import React from 'react';
import styled from 'styled-components';

const FormStyled = styled.form`
    margin: 10px auto;

    label {
    margin-right: 20px;
    }
    option{
    padding: 0 10px;
    }  

    @media (max-width: 444px){
        width: 90%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
  }
`;


const TableSelect = ({ positions, setQuery }) => {
    return (
        <FormStyled>
            <label >Choose which position to check: </label>
            <select onChange={(e) => setQuery(e.target.value)}>
                <option >All</option>
                {positions.map((s, index) => (
                    <option key={index} >{s.position}</option>
                ))}
            </select>
        </FormStyled>
    );
};

export default TableSelect;