import { createGlobalStyle } from 'styled-components';
import 'assets/fonts/_fonts.css';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fonts.primary};
    margin: 0 auto;
  }
  
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }  
`;

export default GlobalStyle;
