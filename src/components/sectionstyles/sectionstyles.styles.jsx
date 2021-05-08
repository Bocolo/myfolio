import styled,{css} from 'styled-components';


export const Section=styled.section`
background:{({ theme }) => theme.mainBackground};
overflow:auto;
height:${props=>props.height ||'auto'};
border-bottom: ${props=> props.borderBottom || '1px solid white'};
`;


//{({ theme }) => theme.mainBackground}
export const MainContainer =styled.div`
width: ${props => props.width || '1200'}px;
height:${props=>props.height ||'auto'};
margin:0 auto;
background: ${({ theme }) => theme.mainContainerBackground};
${props=> props.projects && css`
width:1400px;
@media(max-width:1472px){
    width:80%;
}
`}
@media (max-width:1400px){
    width:80%;
    
 }
 @media (max-width:1200px){
    width:90%;
    
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
export const ColumnSide=styled.div`
display:flex; 
flex-direction:row;
gap: 10px;

@media screen and (max-width:800px) {
    flex-direction: column;
}
`;
export const SkillsContainer =styled.div`
width:50%;
padding-left: 5%;
padding-right:  5%;
padding-top: 3%;
padding-bottom: 3%;

@media screen and (max-width:800px) {
    width:100%;
    padding-left: 10%;
    padding-right:  10%;
   
    padding-bottom: 10%;
   
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

@media (max-width:850px){
    font-size:${props => props.smFontSize || '20px'};
    line-height:1;
    padding:8px;
    padding-bottom:0px;
}
`;
export const TitleContainer=styled.div`
padding: ${props => props.padding ||'15px'};
padding-bottom: ${props=>props.paddingBottom};
padding-top: ${props => props.paddingTop ||''};
text-align:${props => props.textAlign ||'center'};
font-size : ${props => props.fontSize || '30px'};
font-weight: ${props=> props.fontWeight};
line-height: ${props=> props.lineHeight };
color: ${props=> props.color};
@media (max-width:850px){
    font-size:${props => props.smFontSize || '32px'};
    line-height:1;
    padding-bottom:${props=> props.smPadBot || '15px'};
    padding-top:0px;
}
`;
//${({ theme }) => theme.mainBackground}
//${props=> props.background ||'rgb(0,0,0)'}
//background: ${props=> props.background ||'${({ theme }) => theme.mainBackground}'};

export const BoxContainer=styled.div`

  border: 1px solid ${({ theme }) => theme.boxBorderColor};
  background:${({ theme }) => theme.mainContainerBackground};

  width: ${props => props.width || '300px'};
  height: ${props => props.height || '200px'};
  margin:0 auto;
  padding-top:${props=>props.paddingTop};
  display:block;
  border-radius:25px;

 
  color:${props => props.color ||''};
  box-shadow: 0px 0px 30px 10px ${({ theme }) => theme.boxBorderColor};

  position: ${props=> props.position};
`;
//rgb(201, 34, 159)