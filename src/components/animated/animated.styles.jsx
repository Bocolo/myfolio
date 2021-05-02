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
