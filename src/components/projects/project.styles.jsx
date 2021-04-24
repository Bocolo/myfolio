import styled from 'styled-components';

export const Overflow=styled.div`
overflow:auto;
`;

export const ProjectArticle=styled.div`

background:${props => props.background ||'#ffcdb2'};

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
background:#B5838D;
//box-shadow: 0px 0px 40px 10px #B5838D;

@media(max-width:900px){
    grid-template-columns:1fr;
    padding-left:0px;
padding-right:0px;
background:#FFB4A2;

}
`;