import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
const Button = styled.button`
  background: ${({ theme }) => theme.mainContainerBackground};
  border: 2px solid ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textColor};
  border-radius: 30px;
  cursor: pointer;
  font-size:1rem;
  padding: 0.6rem;
  }
`;
const Toggle = ({theme,  toggleTheme, text }) => {
    return (
        <Button onClick={toggleTheme} >
          
          {text}
        </Button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;