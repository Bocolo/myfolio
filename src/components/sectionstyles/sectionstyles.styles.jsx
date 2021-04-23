import styled from 'styled-components';


export const Section=styled.section`
background: ${props => props.background || 'black'};
overflow:auto;
height:${props=>props.height ||'auto'};

`;



export const MainContainer =styled.div`
width: ${props => props.width || '1200px'};
height:${props=>props.height ||'auto'};
margin:0 auto;
background: ${props=> props.background ||'#2a3632'};

@media (max-width:1250px){
    max-width:90%;
}
`;
//possibly adding border radius
export const TwoColumnGrid=styled.div`
border:${props=> props.border || ''};
display: grid;
grid-template-columns: ${props=> props.gridTemplateColumns || '1fr 1fr'};
@media (max-width:800px){
    grid-template-columns:1fr;
}
`;
export const OneColumnGrid=styled.div`
grid-gap:20px;
display: grid;
grid-template-columns:1fr ;


`;
export const LeftCol=styled.div`
display:grid;
padding-top: ${props => props.paddingTop || '50px'};
padding-bottom:${props => props.paddingBottom || '50px'};
justify-content:center;
text-align:center;
`;

//for left
//grid-area: left-row;
//for RightCol
//padding-bottom:50px;
//display:grid;
//grid-area: right-row;
export const RightCol=styled.div`
display:grid;
padding-top: ${props => props.paddingTop || '50px'};
padding-bottom:${props => props.paddingBottom || '50px'};
justify-content: center;

margin-top: ${props=> props.marginTop || '30px'};

`;