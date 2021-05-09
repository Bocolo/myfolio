import React from 'react';
import {GameContainer} from './game.styles';
import GameWebGL from '../gamewebgl/gamewebgl.component';
import GameInstructions from '../gamewebgl/gameinstructions.component';
import {
    Section,
    MainContainer,
    TitleContainer

} from '../sectionstyles/sectionstyles.styles';
import {ProjectColumns} from '../projects/project.styles';
const Game =()=>{

    return(
       <div>
           <Section>
               <MainContainer>
               <TitleContainer fontSize='48px'  textAlign='center' paddingBottom="40px"paddingTop="40px">
                   Let's Play a Game</TitleContainer>

                <ProjectColumns>
                    
                    <GameInstructions/>
                    <GameWebGL/>
                </ProjectColumns>  
               </MainContainer>
              
           </Section>
         
           
       </div>
    )
}

export default Game;