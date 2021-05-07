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
export const BannerSections =styled.div`
width:25%;
background: ${props=> props.background || 'green'};
height: 100%;

&:hover{
    opacity: .8;
}

`;
export const LeftBanner =styled.div`
width:60%;
`;
export const RightBanner =styled.div`
width:40%;
`;

export const BGColor = styled.div`
height:auto;
width:100%;
display: flex;
flex-wrap: wrap;
padding:100px;
padding-bottom:0;
justify-content:center;
@media (max-width:1700px){
    height:auto
}
  @media (max-width:1200px){
    height:auto
  }
  @media (max-width:800px) {
  
  }

`;
export const NameH1 = styled.h1`
text-align:center;
font-size: 3rem;

`;

export const MainText = styled.div`
text-align:center;
line-height:1.2;
font-size:2rem;


`;
export const SmallText = styled.div`

padding-top:30px;
text-align:center;
line-height:1.2;
font-size:1.1rem;


`;
export const SmallContainer =styled.div`
width: ${props => props.width || '800'}px;
height:${props=>props.height ||'auto'};
margin:0 auto;

@media (max-width:1400px){
    width:80%;
    
 }
 @media (max-width:1200px){
    width:90%;
    
 }


`;