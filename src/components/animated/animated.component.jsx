import React from 'react';
import {MainImageBG, SvgJS,SVGPy} from './animated.styles.jsx';
import './animated.styles.scss';
import computer from '../../imgs/computer.jpg';
import jsico from '../../imgs/jsico.svg';
import {ReactComponent as JSIcon} from '../../imgs/jsico.svg';
import {ReactComponent as PIcon} from '../../imgs/pythonico.svg';
import styled from 'styled-components';


const Animated =()=>{

    return(
    <div>
        {/* <img className="imgban" src={computer} alt='' /> */}
        <MainImageBG src={computer} alt='f'></MainImageBG>
       {/* <div>
           
           <SvgJS><JSIcon/><PIcon/></SvgJS>
           <SVGPy><PIcon/></SVGPy>
       </div> */}
      
      

    </div>
    )
}

export default Animated;