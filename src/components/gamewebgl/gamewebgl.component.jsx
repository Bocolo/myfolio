import React, {Component} from 'react';
 import Unity,{UnityContext, UnityContent} from 'react-unity-webgl';
import {GameContainer, GameColumn} from '../game/game.styles';


const GameWebGL =()=>{
    const unityContent =new UnityContent(
        '../../../Build/ShooterWebGLBuild.json',
        '../../../Build/UnityLoader.js'
    )

    return(
        <div >
            <div>MyGame</div>
            <div >
            <GameContainer>
              
                                     
                <Unity unityContent={unityContent}  />
                       
            </GameContainer>
            </div>
        </div>
    )


}
export default GameWebGL;


















