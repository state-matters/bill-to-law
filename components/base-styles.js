import { createGlobalStyle } from "styled-components"
import { colors } from "constants"

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  :root {
    font-size: 12px;
  }
  html, body, h1, h2, h3, h4, h5, p, ul, li, ol,
  aside, section, input, button, main, header, footer {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: "Poppins", sans-serif;
    font-size: 1.334rem;
    line-height: 1.5;
    background: ${colors.purple_700};
    color: ${colors.ui_100};
  }
  h1 {
    font-size: 5rem;
    font-weight: 800;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 3rem;
  }
  h4 {
    font-size: 2rem;
  }
  h5 {
    font-size: 1.5rem;
    font-weight: 800;
  }
`
