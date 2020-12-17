import { createGlobalStyle } from "styled-components"

const Typography = createGlobalStyle`

  html {

  }
  p, li {
    letter-spacing: 0.5px;
    line-height: 1.5rem;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  p {margin-bottom: 1rem; margin-top: 0}

  h1, h2, h3, h4, h5 {
    margin: 0 0 1.38rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: 2.488rem;
  }

  h2 {font-size: 2.074rem;}

  h3 {font-size: 1.728rem;}

  h4 {font-size: 1.44rem;}

  h5 {font-size: 1.2rem;}

  small, .text_small {font-size: 0.833rem;}
  
`

export default Typography
