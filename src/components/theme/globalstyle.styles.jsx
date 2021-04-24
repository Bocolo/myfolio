import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.mainBackground};
    color: ${({ theme }) => theme.textColor};
    font-family: 'Courier New','Open Sans Condensed', sans-serif;
    transition: all 0.50s linear;
  }
  `;
  //'Courier New','Open Sans Condensed', sans-serif;