import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    border: none;

    font-family: 'Oswald', sans-serif;
  }

  body {
    background-color: #333333;
  }
`;
 
export default GlobalStyle;