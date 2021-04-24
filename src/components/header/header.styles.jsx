import styled, { css } from 'styled-components';
import {Link} from 'react-router-dom';
//   background-color: #e5989b; 6930c3
export const NavContainer =styled.div`transform: translateY(-100%);
`;
export const HeaderContainer = styled.div`
   
    height: 70px;
    z-index:1;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color:${({ theme }) => theme.headFootColor};
   left:0;
    top:0;
    font-size:22px;
    
   
    

@media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    
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
            color:${({ theme }) => theme.textColor};
            font-weight: bold;
`;
export const OptionLink = styled(Link)`
${OptionContainerStyles}`;
export const OptionDiv = styled.div`
${OptionContainerStyles}`;