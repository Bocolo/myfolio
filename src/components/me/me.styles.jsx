import styled from 'styled-components';


export const MeContainer = styled.div`
height: auto;
padding: 50px;
text-align:center; 
background: ${({ theme }) => theme.headFootColor};
color:${({ theme }) => theme.headFootTextColor};
border-radius: ${props=> props.borderRadius || '0px'};
icons {
    display:flex;
    display:flex-wrap;
   justify-content: center;
    
}
`;
