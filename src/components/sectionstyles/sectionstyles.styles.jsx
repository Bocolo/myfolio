import styled from 'styled-components';


export const Section=styled.section`
background: ${props => props.background || '#ffb4a2'};
overflow:auto;
height:${props=>props.height ||'auto'};
border-bottom: ${props=> props.borderBottom || '1px solid white'};
`;



export const MainContainer =styled.div`
width: ${props => props.width || '1200px'};
height:${props=>props.height ||'auto'};
margin:0 auto;
background: ${props=> props.background ||'#ffcdb2'};

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
padding-top: ${props => props.paddingTop || '100px'};
padding-bottom:${props => props.paddingBottom || '50px'};


justify-content:left;

margin-top: ${props=> props.marginTop || '30px'};
@media (max-width:800px){
    justify-content:center;
    padding-top: 0px;
}

`;
export const TextContainer=styled.div`
padding: ${props => props.padding ||'15px'};
padding-bottom: ${props=>props.paddingBottom};
padding-top: ${props => props.paddingTop ||''};
text-align:${props => props.textAlign ||'center'};
font-size : ${props => props.fontSize || '20px'};
font-weight: ${props=> props.fontWeight};
line-height: ${props=> props.lineHeight };
`;