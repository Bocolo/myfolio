import styled from 'styled-components';

export const SkillIcons = styled.div``;
export const MeContainer = styled.div`
height: auto;
padding: 50px;

text-align:center; 
background: ${({ theme }) => theme.headFootColor};
color:${({ theme }) => theme.headFootTextColor};
border-radius: ${props=> props.borderRadius || '0px'};
span {
    display:flex;
    display:flex-wrap;
   justify-content: center;
    
}
@media (max-width:606px) {
    border-radius: ${props=> props.borderRadiusSm || '0px'};
}
@media (max-width:335px) {
    border-radius: ${props=> props.borderRadiusXSm || '0px'};
}
`;

