import React from 'react';
import {MeContainer} from './me.styles.jsx';
import {MainText, SmallText,SmallContainer} from '../animated/animated.styles';


const MeAgain =()=>{

return(
    <div>
    <MeContainer borderRadius ='0px 0px  0px  150px' borderRadiusSm ='0px  0px 0px 100px' borderRadiusXSm ='0px  0px 0px 60px'>
        <MainText fontSize='1.8em' fontSizeSm='1.1em'>How did I get here? </MainText>
        <SmallContainer >
            <SmallText fontSizeSm='.9em'>
              

                The Design of Everyday Things inspired me to become a developer.
                I wanted to use my background in psychology to help others develop intuitavely functional products but 
                the more I read the more I was driven to be that person.  
                <br/><br/>
                So, I began to teach myself programming and I have not looked back since.
                Now, I build and design things to my standards, 
                I take ideas and find creative ways to execute them and I am relentless in my pursuit 
                of more knowledge in the field.

                 </SmallText>
                
                 
        </SmallContainer>
    </MeContainer>

    </div>
)

}

export default MeAgain;