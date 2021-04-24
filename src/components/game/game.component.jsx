import React from 'react';
import {} from './game.styles';
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
               </MainContainer>
           </Section>
           <div className='ttu tc f4 pa4 brack'>
               Game Block
           </div>
       </div>
    )
}

export default Game;