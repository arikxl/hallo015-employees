import React from 'react';
import styled from 'styled-components';

const BarStyled = styled.div`
    width: 10%;
    display: flex ;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: flex-end;
    p{
        font-size: 20px
    }
    .bar{
        display : flex ;
        width: 70px;
        background: var(--bar);
        margin: 0 8px;
        justify-content: center;
        align-items: flex-end ;
        font-size: 14px;
        color: white;
    }

    @media (max-width: 444px){
    
        .bar , .low{
            width: 18px;
            writing-mode: vertical-rl;
            text-align: center;
        }
  }
`;

const Bar = ({ position }) => {
    return (
        <BarStyled>
            <p>
                {position.amountOfEmployees}
            </p>
            <div className={position.amountOfEmployees < 40 ? "low" : "bar"}
                style={{ height: position.amountOfEmployees * 2.5 }}>
                {position.position}
            </div>
        </BarStyled>
    );
};

export default Bar;