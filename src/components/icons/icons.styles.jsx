import styled from 'styled-components';


export const IconContainer=styled.div`
display: flex;
flex-wrap:wrap;
justify-content:center;

`;

export const ImageSizer=styled.img`
width:35px;
  height: auto;
  margin-right: 10px;
 
  margin-bottom: 20px;
`;

export const SvgStyle= styled.div`
display:flex;

svg{
height:50px; 
width:50px;
margin:10px;
fill:#5c2b95;
}

&:hover svg{
  height:50px; 
width:50px;
margin:10px;
    fill:#b561cf;
    transform:scale(1.1);
}

`;
export const BrainStyle= styled.div`
display:flex;
justify-content:center;
width:100%;

svg{
 
height:50%; 
width:50%;
margin:10px;
fill:black;
padding-bottom:100px;

@media (max-width:1700px){
  height:40%; 
width:40%;
}
@media (max-width:1200px){
  height:50%; 
  width:50%;
}
@media (max-width:800px) {
  height:70%; 
  width:70%;
}
@media (max-width:600px) {
  height:90%; 
  width:90%;
}}



`;
export const SvgJS= styled(SvgStyle)`
svg{ fill: Black;}
&:hover svg{fill:#FFD845;}
`;
export const SvgPy= styled(SvgStyle)`
svg{ fill: #306998;}
&:hover svg{fill:#FFE873;}
`;
export const SvgCSS= styled(SvgStyle)`
svg{ fill: #1572B6;}
&:hover svg{fill:#2965f1;}
`;
export const SvgHTML= styled(SvgStyle)`
svg{ fill: #f06529;}
&:hover svg{fill: #E44D26;}
`;
export const SvgReact= styled(SvgStyle)`
svg{ fill: #61DAFB;}
&:hover svg{fill:#61dbfb;}
`;
export const LeftBrain= styled.div`
display:flex;
justify-content:center;
width:100%;
object-fit:cover; 
object-position:50% ;
svg{
height:50%; 
width:50%;
margin:10px;
fill:black;
padding-bottom:100px;
}

&:hover svg{
 
margin:10px;
    fill:black;
    transform:scale(1.1);
}

`;
export const WalkStyle= styled.div`
display:flex;
justify-content:center;
width:100%;
padding-top:30px;
svg{
 
height:50%; 
width:70%;
margin:10px;
margin-bottom:0;
fill:black;


@media (max-width:1200px){
  height:50%; 
  width:50%;
}
@media (max-width:800px) {
  height:70%; 
  width:70%;
}
@media (max-width:600px) {
  height:90%; 
  width:90%;
}}



`;

//vscolor :#5c2b95

// csss fill none first g
// css fill="#157EFB" second g