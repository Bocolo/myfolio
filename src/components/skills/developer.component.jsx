import React from 'react';
import {Section, BoxContainer,
DevColumn,DevContainer,
TitleContainer} from '../sectionstyles/sectionstyles.styles';
import {ReactComponent as Brain} from '../../svgs/workinglate.svg';

import styled from 'styled-components';
const DevColumns=styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
text-align: center;

@media(max-width:714px){
    grid-template-columns: 1fr;
}

`;
const DevText=styled.div`
font-size: ${props=> props.fontSize};

@media(max-width: 600px){
    font-size: ${props=> props.fontSizeSm};  
}
`;
const UnderLine= styled.div`
content: '';
	display: block;
    
	width: 50%;
    max-width:120px;
margin:0 auto;	
height: 1px;
	background-color: grey;
`;
export const SvgSt= styled.div`
display:flex;
margin:10px;
justify-content:center;
svg{
width:130px;height:130px;}`
const Developer =()=>{
    return(
       <Section>
           <br/>
           <DevContainer>
           
                <BoxContainer width='80%' height='auto'>
                    <DevColumns>
                        <DevColumn>
                            <SvgSt><Brain/></SvgSt>
                            <TitleContainer fontSize='1.4em' smFontSize='1.2em'>React Developer
                           </TitleContainer>
                           
                            <UnderLine></UnderLine>
                            <br/>
                            {/* <p>
                                ReactJS makes it easy to build elegant, responsive websites with clean, resueable code.
                                 
                            </p> */}
                           
                            <DevText fontSize='1.05em' fontSizeSm='.90em'>
                                I love working with React because of it's scalability and flexibilty.
                                <br/><br/>
                                    With a smooth building process and the ability to reuse components,
                                    websites can be tailored quickly to the demands of the project without sacrificing
                                    functionality. <br/><br/>
                                 If you want to bring your vision to life,
                                       why not get in touch? Allow me to execute your idea with an elegant and responsive site
                                       tailored to your needs.
                                       <br/>
                            </DevText>
                
                        </DevColumn>
                        <DevColumn borderRight='0px'>
                                
                        <SvgSt><Brain/></SvgSt>
                            <TitleContainer fontSize='1.4em' smFontSize='1.2em'>Game Developer</TitleContainer>
                            <UnderLine></UnderLine>
                            <br/>
                            <DevText fontSize='1.05em' fontSizeSm='.90em'>
                              
                                    {/* Bringing game ideas to life is a true passion for me.
                                    I love creating an engaging experience for players.
                               <br/> <br/>  */}
                               Devoloping games is a dream for anyone wanting to express thier creativity.
                                 You control every aspect of the universe you build.
                                 You develop the rules, the controls and the complexity.
                                  And you build it from the ground up.  There is nothing more satisfying.
                                  <br/> <br/> I love the process of taking a game concept and engineering a finished Project.
                                    Every stage is a thrill, from exploring functionality options to debugging to finalising
                                    the smallest of details.<br/> 
                            </DevText>
                        </DevColumn>
                    </DevColumns>
                </BoxContainer>
       </DevContainer>
       <br/>
       </Section>
    )
};


export default Developer;