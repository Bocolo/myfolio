import styled,{css} from 'styled-components';

export const Overflow=styled.div`
overflow:auto;
`;

export const ProjectArticle=styled.div`

background:${({ theme }) => theme.mainContainerBackground};

box-shadow:
  0 5px 10px rgba(0, 0, 0, 0.1),
  0 20px 20px rgba(0, 0, 0, 0.05);
opacity:.9;
&:hover{
    opacity:1;
    transition:opacity .15s ease-in;
}
@media(max-width:800px){
opacity:1;
}
`;
export const ClearField=styled.article`

content: " ";
display: table;
`;

export const ProjectImageContainer=styled.div`
float: left;
display: inline;
width: ${props=>props.width || '25%'};

`;
export const ImageAspect =styled.div`
display: block;
height: 0;
position: relative;

padding-bottom: ${props=> props.paddingBottom || '100%'};
`;
export const ProjectImage=styled.img`
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 100;

&:hover  {
    opacity:0.65;
    transition: opacity .15s ease-in;
}


`;

export const ProjectColumns=styled.div`
display:grid;
grid-template-columns:1fr 1fr;
grid-gap:1em;
padding-left:10px;
padding-right:10px;
padding:10px;
background:${({ theme }) => theme.otherBackground};
//box-shadow: 0px 0px 40px 10px #B5838D;
${props => props.fourCol && css`
grid-template-columns:1fr 1fr 1fr 1fr ;
@media(max-width:1472px){
    grid-template-columns:1fr 1fr 
}`}

@media(max-width:700px){
    grid-template-columns:  .7fr;
    justify-content:center;
    padding-left:0px;
padding-right:0px;


}
`;
export const ATag= styled.a`
color: ${props => props.color};
`;


export const FlipCardFront = styled.div`

height: 100%;
width: 100%;
text-align:center;
padding: 4em;
color:white;
background-image: url(${props=> props.img});
background-position: 50% 50%;
background-size: cover;
position: absolute;
top: 0;
left: 0;
background-color: #000000;
backface-visibility: hidden;
transform: rotateX(0deg);
transition: .5s;
border-radius:50%;
z-index: 10;
`;
export const FlipCardFrontTwo = styled(FlipCardFront)`

border-radius : ${props => props.borderRad};
`;

export const FlipCardBack = styled.div`
height: 100%;
width: 100%;
border-radius:35px;
position: absolute;
top: 0;
left: 0;
background-color: #313131;
background-position:center;
backface-visibility: hidden;
transform: rotateX(180deg);
transition: .5s;
color: #ffffff;
text-align: center;

      z-index: -1;
`;
export const FlipCardInner = styled.div`
height: 100%;
display: grid;
padding: 1.5em;
padding-top:.5em;
transform: translateZ(80px) scale(0.94);
svg{
    width:40px;
    height:40px;
    fill: white;
    &: hover{ transform: scale(1.2);
    fill:#FDE74C;}
}

`;
export const CollapseMeButton=styled.button`
border:none;
padding: 7px;
padding-left:10px;
padding-right:10px;
background: ${({theme})=>theme.boxBorderColor};
border-radius: 50px;
opacity:.8;
&:hover{transform: scale(1.1);
   
    opacity:1;
}

}
`;
export const CollapseButtonContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
padding-bottom:20px;
`;
export const ProjectContainerCollapsable=styled.div`

`;
export const FlipCardContainer = styled.div`
display:flex;
flex-flow: row wrap;
justify-content: center;
grid-gap: ${props=>props.gridGap || '10px'};
margin-bottom:  ${props=>props.marginBottom ||  '3em'};


`;
export const FlipCard = styled.div`
position: relative;
height: 370px;
width: 370px;
transform-style: preserve-3d;
perspective: 600px;
transition: .5s;

&:hover {
    ${FlipCardFront}{
    transform: rotateX(-180deg);
    z-index: 10;}
${FlipCardBack}{
    transform: rotateX(0deg);
    z-index: -1;
}}

`;
export const ProjectTitle =styled.h1`
`;

export const FullContainer = styled.div`

height:${props=>props.height ||'auto'};
margin:0 auto;
background: ${({ theme }) => theme.mainContainerBackground};
padding-bottom:20px;
padding-top:20px;
border-top: 1px solid #c1c1c1;
border-bottom: 1px solid #c1c1c1;`;