import React from 'react';
import { BGColor, MainText} from './animated.styles.jsx';
import {SvgAvatar, WalkStyle} from '../icons/icons.styles.jsx';
import './animated.styles.scss';

import {ReactComponent as WalkOutside} from '../../svgs/walkoutside.svg';
import {ReactComponent as FemaleAvatar} from '../../svgs/femaleav.svg';

const Animated =()=>{

    return(
    <div>
     
        <BGColor>
           
            <div>
         
               <SvgAvatar><FemaleAvatar/></SvgAvatar>
               <MainText fontSizeM='1.5em' fontSizeSm='1.1em'>
                
                   I am the Developer you didn't know you needed
               </MainText>
                
                <WalkStyle>
              
                    <WalkOutside/></WalkStyle>
             
            </div>
        </BGColor>
        
     
      
      

    </div>
    )
}

export default Animated;