import React from 'react';
import {MainImageBG, BGColor, MainText, BannerSections, LeftBanner,RightBanner,
NameH1} from './animated.styles.jsx';
import {SvgAvatar,SvgPy,SvgStyle,IconContainer,BrainStyle, WalkStyle} from '../icons/icons.styles.jsx';
import './animated.styles.scss';
import {ReactComponent as HotAir} from '../../svgs/hotAirballoon.svg';
import {ReactComponent as WalkOutside} from '../../svgs/walkoutside.svg';
import {ReactComponent as FemaleAvatar} from '../../svgs/femaleav.svg';

import {ReactComponent as DesignerLife} from '../../svgs/designerlife.svg';
import {ReactComponent as WorkingLate} from '../../svgs/workinglate.svg';
import jsico from '../../imgs/jsico.svg';

import styled from 'styled-components';

import Toggler from '../toggler/toggler';
const Animated =()=>{

    return(
    <div>
     
        <BGColor>
           
            <div>
         
               <SvgAvatar><FemaleAvatar/></SvgAvatar>
               <MainText>
                   I am a Software, Web Developer and Game Designer
               </MainText>
         
                <WalkStyle><WalkOutside/></WalkStyle>
             
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