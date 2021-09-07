import React , {useState}from 'react';
import Game from '../../components/game/game.component';
import Animated from '../../components/animated/animated.component';
import Languages from '../../components/skills/languages.component';
import Developer from '../../components/skills/developer.component';
import Me from '../../components/me/me.component';
import MeAgain from '../../components/me/meagain.component';
import SecondaryProject from '../../components/projects/secondaryproject.component';

import './homepage.styles.scss';
const HomePage = () => {
    const [display, setDisplay] = useState(true);
    window.addEventListener('touchstart', function userTouch(){setDisplay(false);})
 
    return(
        <div>
            <Animated />
           <Me/>
            <SecondaryProject/>
            <MeAgain/>
            <Developer/>
            <Languages/> 
            <br/><br/>
            {display?(<Game/>):(<></>)}
          
            
        </div>  
    );
}
    

export default HomePage;
    
        
       
      