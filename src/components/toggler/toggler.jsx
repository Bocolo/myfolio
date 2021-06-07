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
const Button2 = styled.button`
  background:${props=>props.background};
  border: 1px solid ${({ theme }) => theme.background};
  
  border-radius: 50px;
  cursor: pointer;
 
  padding: 0.6rem;
  width: 10px;
  }
`;
const Toggle = ({theme,  toggleTheme, text , background}) => {
    return (
        // <div>
        //   <Button onClick={toggleTheme} >
          
        //     {text}
        //   </Button>
             <Button2 background={background} onClick={toggleTheme} >
          
            
           </Button2>
       // </div>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;