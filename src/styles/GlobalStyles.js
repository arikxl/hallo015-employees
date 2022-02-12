import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
        --red: #ff0000;
        --yellow: #ffff00;
        --green: #008000;

        --gradient: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,255,0,1) 50%, rgba(0,128,0,1) 100%);
        --bar: linear-gradient(360deg, rgba(255,0,0,1) 0%, rgba(255,255,0,1) 50%, rgba(0,128,0,1) 100%);

        --black: #000000;
        --grey1: #333333;
        --white: #ffffff;
    }
    ::placeholder {
        color: var(--black);
        opacity: 1;
    }
    ::selection {
    background: var(--green);
    color: var(--white);
    }

    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Saira Condensed', sans-serif;
    }
    
    body {
       
    }
    
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }

    h1{
        font-size: 2rem;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
        margin: 0;
        padding: 0;
    }

    .flex {
        display: flex;
    }

    .flex-end {
        justify-content: flex-end;
    }
    .column {
        flex-direction: column;
    }
    .space-between{
        justify-content: space-between;
    }
    .align-center {
        align-items: center;
    }

    .space-evenly {
        justify-content:space-evenly;
    }

    .justify-center{
        justify-content: center;
    }
    .justify-end{
        justify-content: flex-end;
    }

    .absolute {
        position: absolute;
    }
    .relative {
        position: relative;
    }

    .column-reverse {
        flex-direction: column-reverse;
    }
  
    .low{
        display : flex ;
        width: 70px;
        margin: 0 10px;
        justify-content: center;
        align-items: flex-end ;
        font-size: 14px;
        color: white;
        background: linear-gradient(360deg, rgba(255,0,0,1) 0%, rgba(255,255,0,1) 100% );
    }

    .section {
        margin: 0 auto;
        display : flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`;

export default GlobalStyle;