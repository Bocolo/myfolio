import React from 'react';
import {MeContainer} from './me.styles.jsx';
import {MainText, SmallText,SmallContainer} from '../animated/animated.styles';


const Me =()=>{

return(
    <MeContainer margin='500px' borderRadius ='0px 150px 0px 0px'  borderRadiusSm ='0px 100px 0px 0px' borderRadiusXSm ='0px 60px 0px 0px'>
        <MainText fontSize='1.8em' fontSizeSm='1.1em'>Hey, I'm Brónagh. </MainText>
        <MainText fontSize='1.6em'fontSizeSm='1.1em'>Welcome to my slice of the internet</MainText>
        <SmallContainer >
            <SmallText  fontSizeSm='.9em'>
                I want to make the world more beautiful, more intuitive and 
                more accessible.
                <br/>  <br/>
                
                I love understanding how things work, why they work,
                and how they can be improved.  And that is why I fell in love with Programming. 
                <br/><br/>
                I am Currently enrolled in NUIG's Higher Diploma in Applied Science in Software Design and Development
                <br/><br/>
                </SmallText>
                {/* <MainText fontSize='1.6em'>More About Me</MainText>
                <SmallText textAlign='left' >
                    I have lived in 4 countries, but thats not nearly enough (just a little over 2%).
                    <br/><br/>
                    I love to read, but mostly if it's fanstastical and epic.  If the world is magic, I'm hooked, 
                    because everyone need a lil more magic in their lives, especially these days.
                    <br/><br/>
                    I can be obsessive, but I like to view that as a positive because it means I'll give 110% everytime.
                    <br/><br/>
                    I love nothing more than standing on top of mountain in rural Ireland or swimming in waves 
                    (somewhere hotter than Ireland).
                  
                </SmallText> */}
           
           {/* <ProfileImg src={profile} borderRadius='20%'/>   */}
        </SmallContainer>
    </MeContainer>
)

}

export default Me;