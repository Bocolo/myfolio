import React from 'react';
import {GameContainer} from './game.styles';
import GameWebGL from '../gamewebgl/gamewebgl.component';
import {
    Section,
    MainContainer,
    TitleContainer

} from '../sectionstyles/sectionstyles.styles';

const Game =()=>{

    return(
       <div>
           <Section>
               <MainContainer>
                    <TitleContainer>
                      ~~~~ Game Block ~~~~
                      
                    
                    </TitleContainer>
                    <GameWebGL/>    
               </MainContainer>
              
           </Section>
           <div className='ttu tc f4 pa4 brack'>
               Game Block
           </div>
           
       </div>
    )
}

export default Game;