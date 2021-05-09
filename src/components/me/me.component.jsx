import React from 'react';
import {MeContainer} from './me.styles.jsx';
import {MainText, SmallText,SmallContainer} from '../animated/animated.styles';


const Me =()=>{

return(
    <MeContainer borderRadius ='0px 150px 0px 0px'>
        <MainText fontSize='1.8em'>Hey there, I'm Brónagh. </MainText>
        <MainText fontSize='1.6em'>Welcome to my slice of the internet</MainText>
        <SmallContainer >
            <SmallText>
                I want to make the world more beautiful, more intuitive and 
                more accessible.
                <br/>
                
                I studied psychology because I love to understand how things work, why they work,
                and how they can be improved.  And I fell in love with programming for those very same reasons. 
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