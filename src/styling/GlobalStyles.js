import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    // Colors 
    --green: #54E6AF;
    --blue-950: #121725;
    --blue-900: #2C344B;
    --blue-600: #5A668A;
    --blue-300: #C2CBE5;
    --white: #FFFFFF;
    --red: #FB3E3E;

    // Fonts
    --chivo: "Chivo", sans-serif;;

    --fw-light: 300;
    --fw-bold: 700;

    // Spacing 
    --spacing-4: 0.4rem;
    --spacing-8: 0.8rem;
    --spacing-16: 1.6rem;
    --spacing-24: 2.4rem;
    --spacing-32: 3.2rem;
    --spacing-40: 4rem;
    --spacing-56: 5.6rem;
    --spacing-64: 6.4rem;
    --spacing-80: 8rem;
    --spacing-88: 8.8rem;
    --spacing-104: 10.4rem;

    // Other 

    // Breakpoints
  }

  *, 
  *::before,
  *::after {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;

    @media only screen and (max-width: 23.4375em) {
      font-size: 50%;
    }
  }

  body {
    box-sizing: border-box;
    font-size: 1.4rem;
    font-family: var(--chivo);
    line-height: 1.5;
    background-color: var(--blue-950);
  }

  a {
    text-decoration: none;
  }

`;

export default GlobalStyles;
