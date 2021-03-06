import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.mainBackground};
    color: ${({ theme }) => theme.textColor};
    font-family:'Tahoma', 'Courier New','Open Sans Condensed', sans-serif;
    transition: all 0.50s linear;
  }
  a{
    color: ${({theme})=>theme.hyperColor};
  }
  `;
