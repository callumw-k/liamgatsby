import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;

  }
  
  html {
    font-size: 100%;
    
  }

  body {
    font-weight: 400;
    line-height: 1.75;
    font-family: 'Montserrat';
    color: var(--black);
  }


`

export default GlobalStyles
