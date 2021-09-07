import styled from 'styled-components';

export const CodeHeaderContainer = styled.div`
width: 100%;
display:grid;
grid-template-columns: 1fr 1.5fr;
text-align:center;
background-color:${({ theme }) => theme.mainContainerBackground};
@media (max-width:800px){
    grid-template-columns:1fr;
}

`;
export const CodeHeaderImage =styled.img`
width:45%;
padding:30px;
border-radius:50px;
&: hover{
    transform: scale(1.1);
}
@media (max-width:800px){
    width:65%;
}
`;
export const CodeHeaderText =styled.div`
text-align:left;
margin:50px;
padding: 10px;

`;
export const CodeHeaderTitle = styled.div`
text-transform: uppercase;
font-size: ${props=> props.fontSize || '2em'};
text-align: ${props=> props.textAlign || 'center'};
background-color:  ${({ theme }) => theme.mainContainerBackground};
padding: 30px;
@media(max-width:800px){
    font-size: ${props=> props.smFontSize || '1.4em'};}
`;
export const CodeHeaderTextColumn= styled.div`
margin-top:20px;
margin-bottom:20px;
border-right: 5px solid ${({ theme }) => theme.mainBackground};
`;
export const CodeHeaderBox= styled.div`

`;
export const CodeHeaderColumns=styled.div`
position: relative;
margin-top:20px;





`;
export const CodeHeader = styled.div`

`;
export const CodeContainer = styled.div`
background-color:${({ theme }) => theme.mainBackground};
border-top: 5px solid ${({ theme }) => theme.mainContainerBackground};
border-bottom: 5px solid ${({ theme }) => theme.mainContainerBackground};
padding:30px;
`;
export const CodeText= styled.div`
`;
// background-image: url(${props=> props.img});
// background-repeat: no-repeat;
// background-size: cover;
// height:50%;
// width: 50%;

// background-position: 50% 100%;
// text-align:center;