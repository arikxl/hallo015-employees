import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  width: 100%;
  height: 40px;
  background: var(--gradient);
  
  img {
    width: 40px;
    height: 40px;
  }
`;

const AppFooter = () => {
  return (
    <Footer className="section">
      <div className="wrapper flex align-center">
        <a href="https://www.linkedin.com/in/arik-alexandrov/"
          target="_blank" rel="noreferrer" className="flex">
          <img src="https://img.icons8.com/carbon-copy/100/000000/linkedin.png" alt="" />
        </a>
        <p>Created by Arik Alexandrov for Hallo015</p>
        <a href="https://github.com/arikxl"
          target="_blank" rel="noreferrer" className="flex">
          <img src="https://img.icons8.com/carbon-copy/100/000000/github-squared.png" alt="" />
        </a>
      </div>
    </Footer>
  );
};

export default AppFooter;


