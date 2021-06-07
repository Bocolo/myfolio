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
padding-top:50px;
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
font-weight:bold;
font-size:${props=> props.fontSize ||'2rem'};
@media (max-width:600px) {
  font-size:${props=> props.fontSizeM };}
  
  }
  @media (max-width:400px) {
    font-size:${props=> props.fontSizeSm || '1.2em'};}
    
    }

`;
export const SmallText = styled.div`

padding-top:${props=> props.paddingTop ||'30px'};
padding-bottom:${props=> props.paddingBottom ||'0px'};
text-align:${props=> props.textAlign || 'center'};
line-height:${props => props.lineHeight || '1.2'} ;
font-size:${props => props.fontSize ||'1.1rem'};
text-transform:${props=> props.textTransform};
font-weight:${props=> props.fontWeight};
@media (max-width:400px) {
  font-size:${props=> props.fontSizeSm || '1em'};}

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