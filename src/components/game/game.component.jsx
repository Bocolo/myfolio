import React from 'react';
import GameWebGL from '../gamewebgl/gamewebgl.component';
import GameInstructions from '../gamewebgl/gameinstructions.component';
import {
    Section,
    MainContainer,
    TitleContainer

} from '../sectionstyles/sectionstyles.styles';

//IS GAME WORKING???? - check unity loader error-- this needs immediate fix
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