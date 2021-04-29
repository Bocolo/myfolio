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
               <TitleContainer>
                          ~~~~ Game Block ~~~~
                       
                       
                </TitleContainer>
                <ProjectColumns>
                    
                    <GameInstructions/>
                    <GameWebGL/>
                </ProjectColumns>  
               </MainContainer>
              
           </Section>
           <div className='ttu tc f4 pa4 brack'>
               Game Block
           </div>
           
       </div>
    )
}

export default Game;