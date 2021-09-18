import React from 'react';
 import Unity,{UnityContent} from 'react-unity-webgl';
import {GameContainer} from '../game/game.styles';


const GameWebGL =()=>{
    const unityContent =new UnityContent(
        '../../../Build2/ShooterWebGLBuild2.json',
        '../../../Build2/UnityLoader.js'
    )

    return(
        <div >
            
             <GameContainer>
               <Unity unityContent={unityContent}  
               
                />
             </GameContainer>
           
        </div>
    )


}
export default GameWebGL;


















