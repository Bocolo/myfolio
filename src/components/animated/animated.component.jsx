import React from 'react';
import {MainImageBG} from './animated.styles.jsx';
import {SvgJS,SVGPy,SvgStyle,IconContainer} from '../icons/icons.styles.jsx';
import './animated.styles.scss';
import computer from '../../imgs/computer.jpg';
 import {ReactComponent as CSSIcon} from '../../imgs/cssico.svg';
import {ReactComponent as VSIcon} from '../../imgs/vsico.svg';
import {ReactComponent as HTMLIcon} from '../../imgs/htmlico.svg';
import {ReactComponent as JSIcon} from '../../imgs/jsico.svg';
import {ReactComponent as PIcon} from '../../imgs/pythonico.svg';
import jsico from '../../imgs/jsico.svg';

import styled from 'styled-components';


const Animated =()=>{

    return(
    <div>
        {/* <img className="imgban" src={computer} alt='' /> */}
        <MainImageBG src={computer} alt='f'></MainImageBG>
       {/* <div>
           
           
       <IconContainer>
           <SvgStyle><HTMLIcon/></SvgStyle>
           <SvgStyle><VSIcon/></SvgStyle>
           <SvgStyle><CSSIcon/></SvgStyle>
           <SvgStyle><JSIcon/></SvgStyle>
               <SVGPy><PIcon/></SVGPy>
               
       </IconContainer>
       </div> */}
      
      

    </div>
    )
}

export default Animated;