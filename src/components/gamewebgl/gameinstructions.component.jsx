import React from 'react';
import {GameContainer,InstructionsContainer} from '../game/game.styles';
import {BoxContainer, TitleContainer,TextContainer,SkillsContainer} from '../sectionstyles/sectionstyles.styles';

const introText =" Live out your inner Han Solo. \nBlast your way through as many asteroids as you can, be sure to catch any power ups that hurdle your way. \n!Warning! Watch out for *{insert name here}*, contact will damage firing mechanisms temporarily."; 
const instructionText="Fire: Press 'Space'\nMove: Press '<' or '>' || 'a' or 'd'";

const Descriptions=({text})=>{
    const newText =text.split('\n').map((str,i)=><p key={i}>{str}</p>);

return(<div>{newText}</div>)
};


const GameInstructions =()=>{
    
    return(
        <div>
  
                {/* <InstructionsContainer>
                    fdfd
                </InstructionsContainer> */}
                <TitleContainer fontSize='48px'  textAlign='center' paddingBottom="40px"paddingTop="40px">Let's Play a Game</TitleContainer>
                <BoxContainer height='auto' width='80%'  border='4px solid #b5838d' boxShadow='0px 0px 30px 10px #b5838d'>
                <TextContainer fontSize='24px' lineHeight='1.5' >
                   How long can you survive the Asteroid field?
                </TextContainer>
                <TextContainer fontSize='21px' lineHeight='1.1' textAlign='left' >
                    <Descriptions text={introText}/>
                    <br/>
                    <Descriptions text={instructionText}/>
                    <br/>
                    Made with Unity and C#. Check out the code <a href='https://github.com/Bocolo/Shooter' target="_blank">here</a>
                </TextContainer>
                </BoxContainer>
           
        </div>
    )
}

export default GameInstructions;