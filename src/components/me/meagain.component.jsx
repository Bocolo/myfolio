import React from 'react';
import {MeContainer} from './me.styles.jsx';
import {MainText, SmallText,SmallContainer} from '../animated/animated.styles';


const MeAgain =()=>{

return(
    <div>
    <MeContainer borderRadius ='0px 0px  0px  150px' borderRadiusSm ='0px  0px 0px 100px' borderRadiusXSm ='0px  0px 0px 60px'>
        <MainText fontSize='1.8em'>Why do I do this? </MainText>
        <SmallContainer >
            <SmallText>
              

                The Design of Everyday Things inspired me to become a developer.
                I wanted to use my background in psychology to help others develop intuitavely functional products but 
                the more I read the more I was driven to be that person.  
                <br/><br/>
                So I wondered, how can I be involved in every
                stage of the development cycle? How can I do what the people I am in awe of do?
                I knew I was a puzzle lover and an analytic thinker but until I asked myself those questions
                 I did not know I was also a developer. 
                 </SmallText>
                <SmallText>
                    
                  I do now.  </SmallText>
                
                  <SmallText> 
                       Let's talk about bringing your vision to life. 
                
            </SmallText>
        </SmallContainer>
    </MeContainer>

    </div>
)

}

export default MeAgain;