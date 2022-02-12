import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 70px;
  background: var(--gradient);
  color: white;
  position: fixed;

  
  .wrapper {
    width :70%;
    height: 100%;
    margin: 0 auto;

    img {
      width: 100px;
    }
  }

  @media (max-width: 444px){
      .wrapper{
        width:90%;
      }
  }
`;

const AppHeader = () => {
  return (
    <Header>
      <div className="wrapper flex space-between align-center">
        <h1 className="flex">Arik Alexandrov</h1>
        <img src='https://015.co.il/images/home/logo-015.png' alt="" />
      </div>
      
    </Header>
  )
}

export default AppHeader