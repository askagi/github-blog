import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
  font-size: 62.5%;
}

 :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${props => props.theme["base-border"]};
 }

 body {
    background-color: ${props => props.theme["base-background"]};
    color: ${props => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;

    font-family: 'Nunito', sans-serif;
    font-size: 1.6rem;
 }
`