import React from 'react';
import styled from 'styled-components';

const ModalStyled = styled.div`
    margin: 20px;
    background-color: green;
    padding: 10px 20px;
    color: white;
    font-size: 1.5rem;
`;



const Modal = ({ newEmployee }) => {
    return (
        <ModalStyled>
            You just hired {newEmployee.name}
            {newEmployee.position &&
                (
                    ` to ${newEmployee.position} position`
                )
            }
        </ModalStyled>
    )
}

export default Modal