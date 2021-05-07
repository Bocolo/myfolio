import React from 'react';
import {MainImageBG, BGColor, MainText, BannerSections, LeftBanner,RightBanner,
NameH1} from './animated.styles.jsx';
import {SvgJS,SvgPy,SvgStyle,IconContainer,BrainStyle, WalkStyle} from '../icons/icons.styles.jsx';
import './animated.styles.scss';
import computer from '../../imgs/computer.jpg';
 import {ReactComponent as CSSIcon} from '../../imgs/cssico.svg';
import {ReactComponent as VSIcon} from '../../imgs/vsico.svg';
import {ReactComponent as HTMLIcon} from '../../imgs/htmlico.svg';
import {ReactComponent as JSIcon} from '../../imgs/jsico.svg';
import {ReactComponent as PIcon} from '../../imgs/pythonico.svg';
import {ReactComponent as CSharp} from '../../svgs/csharp.svg';
import {ReactComponent as CSS} from '../../svgs/css.svg';
import {ReactComponent as JavaScript} from '../../svgs/javascript.svg';
import {ReactComponent as Brain} from '../../svgs/brain.svg';
import {ReactComponent as WalkOutside} from '../../svgs/walkoutside.svg';
import jsico from '../../imgs/jsico.svg';

import styled from 'styled-components';


const Animated =()=>{

    return(
    <div>
     
        <BGColor>
           
            <div>
               <NameH1>Bronagh Colton</NameH1>
               <MainText>
                   I am a Software and Web Developer
               </MainText>
               
                {/* <BrainStyle><Brain/></BrainStyle> */}
                <WalkStyle><WalkOutside/></WalkStyle>
                {/* <LeftBrain><Brain/></LeftBrain> */}
            </div>
        </BGColor>
        
     
      
      

    </div>
    )
}

export default Animated;

{/*           
            <BannerSections background='#ffe5d9'></BannerSections>
            <BannerSections background='#fec5bb'></BannerSections>
            <BannerSections background='#d8e2dc'></BannerSections>
            <BannerSections background='#ffd7ba'></BannerSections>
             */}
            
            {/* <MainText>
                Allow me to to introduce myself

            </MainText> */}

            //brain hemispher oodle atribution
            //<a href="https://www.freepik.com/vectors/brain">Brain vector created by freepik - www.freepik.com</a>

            //sttr vec
            //<a href="https://www.vecteezy.com/free-vector/right-brain">Right Brain Vectors by Vecteezy</a>