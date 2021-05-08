import React from 'react';
import {MeContainer} from './me.styles.jsx';
import {MainText, SmallText,SmallContainer} from '../animated/animated.styles';
import {MainContainer} from '../sectionstyles/sectionstyles.styles';

const Me =()=>{

return(
    <MeContainer borderRadius ='0px 150px 0px 0px'>
        <MainText>Hi, I'm Bronagh. </MainText>
        <MainText>Welcome to my slice of the internet</MainText>
        <SmallContainer >
            <SmallText>
                {/* I have fallen in love with the world of development.  
                I never imagined when I first started learning CS that it would become a passion for me,
                that I would fall in love with it's complexities and it's linearity. */}
                {/* The Design of Everyday Things is the reason I began a journey into technology.
                I wanted to use my psychology background to ****[improve] UX through functional, streamlined 
                design.  The more I was driven to learn about the process the greater the urge I had to understand
                 the development cycle intimately and so, I began to learn to code.
                  In that, I found my truest passion. 
                  I knew I was a puzzle lover and an analytic thinker but I did not know I was also a developer.
                  How can I do what the people I am in awe of do? What career would allow
                me to have input in every stage from conception to deployment? 
                
                    <SmallText>  
                      All I needed next was the skillset. So I acquired it.
                 I have taught myself multiple languages, frameworks and technologies and I will continue to learn 
                 when and where I can.  I am in love with development and I will bring that passion and drive 
                 to your product. 
                 </SmallText>
                 Now I can take an idea or a hint of inspiration and build games and websites, tweaking everybit of 
                    functionality to do exactly as I see fit. I can bu
                 */}

                The Design of Everyday Things inspired me to become a developer.
                I wanted to use my background in psychology to help others develop intuitavely functional products but 
                the more I read the more I was driven to be that person.  So I wondered, how can I be involved in every
                stage of the development cycle? How can I do what the people I am in awe of do?
                I knew I was a puzzle lover and an analytic thinker but until I asked myself those questions
                 I did not know I was also a developer. 
                 </SmallText>
                <SmallText>
                    
                  I do now.  </SmallText>
                {/* <SmallText>
                     I design games and websites for the simple joy of creating something from nothing.  
                  </SmallText> */}
                  <SmallText> 
                       Let's talk about bringing your vision to life. 
                
            </SmallText>
        </SmallContainer>
    </MeContainer>
)

}

export default Me;