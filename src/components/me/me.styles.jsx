import styled from 'styled-components';


export const MeContainer = styled.div`
height: auto;
padding: 50px;
text-align:center; 
background: ${({ theme }) => theme.headFootColor};
color:${({ theme }) => theme.headFootTextColor};
`;
