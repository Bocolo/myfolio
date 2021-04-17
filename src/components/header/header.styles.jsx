import styled, { css } from 'styled-components';
import {Link} from 'react-router-dom';

export const NavContainer =styled.div`transform: translateY(-100%);
`;
export const HeaderContainer = styled.div`
   
    height: 70px;
    z-index:1;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #e5989b;
    position:absolute;
    left:0;
    top:0;
   
  
    

@media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
}
    
`;
export const LogoContainer = styled(Link)`
        height: 100%;
        width: 70px;
        padding: 25px;
        
@media screen and (max-width: 800px) {
    width: 50px;
padding:0;
    }
`;
export const OptionsContainer = styled.div`
        
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        width: 100%;
@media screen and (max-width: 800px) {
    width: 80%;
    }
`;
//above justify-content: change to flex-end && width: 50%
 const OptionContainerStyles = css`

            padding: 10px 15px;
            cursor:pointer;
`;
export const OptionLink = styled(Link)`
${OptionContainerStyles}`;
export const OptionDiv = styled.div`
${OptionContainerStyles}`;