import React from 'react';
import {BoxContainer, TextContainer} from '../sectionstyles/sectionstyles.styles';

const introText =" Live out your inner Han Solo. \nBlast your way through as many asteroids as you can, be sure to catch any power ups that hurdle your way. \n!Warning! Watch out for green space acid, contact will damage firing mechanisms temporarily."; 
const instructionText="Fire: Press 'Space'\nMove: Press '<' or '>' || 'a' or 'd'";

const Descriptions=({text})=>{
    const newText =text.split('\n').map((str,i)=><p key={i}>{str}</p>);

return(<div>{newText}</div>)
};


const GameInstructions =()=>{
    
    return(
        <div>
  
                <br/>
                <BoxContainer height='auto' width='95%'  border='4px solid #b5838d' boxShadow='0px 0px 30px 10px #b5838d' paddingTop='10px' paddingBottom='10px' padding='10px'>
                <TextContainer fontSize='24px' lineHeight='1.5' >
                   How long can you survive the Asteroid field?
                </TextContainer>
                <TextContainer fontSize='21px' lineHeight='1.1' textAlign='left' smFontSize='18px' >
                    <b>Don't be dispondent ... I will return to fix the game (and the display errors it has caused)</b>
                    <br/>
                    <Descriptions text={introText}/>
                    <br/>
                    <Descriptions text={instructionText}/>
                    <br/>
                    Made with Unity and C#. Check out the code <a href='https://github.com/Bocolo/Shooter' rel="noreferrer" target="_blank">here</a>
                </TextContainer>
                </BoxContainer>
           
        </div>
    )
}

export default GameInstructions;