import styled from 'styled-components';
import {ReactComponent as Icon} from '../../imgs/jsico.svg';

export const MainImageBG =styled.img`
height :700px; 
width:100%;
object-fit:cover; 
object-position:50% 55%;
@media (max-width:1700px){
    height:600px;
}
  @media (max-width:1200px){
      height:500px;
  }
  @media (max-width:800px) {
      height:400px
  }


`;

export const SvgStyle= styled.div`
width:100

svg{
height:50px; 
width:50px;
margin:10px;
fill:black;
}
&:hover svg{
    fill:yellow;
    transform:scale(1.1);
}

`;
export const SvgJS= styled(SvgStyle)`
svg{ fill: pink;}
&:hover svg{fill:red;}
`;
export const SVGPy= styled(SvgStyle)`
svg{ fill: yellow;}
&:hover svg{fill:green;}
`;