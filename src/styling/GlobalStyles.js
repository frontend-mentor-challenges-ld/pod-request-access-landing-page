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

    --fw-400: 400;
    --fw-600: 600;
    --fw-700: 700;

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
    /* background-color: var(--off-black); */
  }

  a {
    text-decoration: none;
  }

`;

export default GlobalStyles;
