import React from 'react';
import RPGscreen from '../../imgs/rpg.png';
import survivalScreen from '../../imgs/survivalscreenshot.png';
import survivalPlay from '../../imgs/playscreensurv.png';
import computer from '../../imgs/computer.jpg';
import './secondaryproject.styles.scss';
import {MainContainer} from '../sectionstyles/sectionstyles.styles';
import {FlipCard,FlipCardBack,FlipCardFront,FlipCardInner, FlipCardContainer} from './project.styles';
const SecondaryProject =()=>{

    return(
      <MainContainer width='1500'>
          
            <FlipCardContainer>
                <FlipCard>
                    <FlipCardFront img={survivalPlay}><h1>SURVIVAL</h1></FlipCardFront>
                    <FlipCardBack >
                        <FlipCardInner>
                        <h2>SURVIVAL</h2>
                        <p>A simple survival game.
                            Shoot up as many enemies as you can,
                            kill enough and activate golden coins,
                            giving you a chance to take your revenge,
                            Pac-man style.
                            <br/> <br/>
                            Gain health by devouring your deactivated enemies.
                            But be warned, you only have so much time
                            before they come back with a vengence.
                            </p>
                        </FlipCardInner>
                    </FlipCardBack>
                </FlipCard>
                <FlipCard>
                    <FlipCardFront img={computer}><h1>E-COMM APP</h1></FlipCardFront>
                    <FlipCardBack >
                        <FlipCardInner>
                        <h2>Crown Clothing</h2>
                        <p>A Learning Project.
                            A stylish E-commerce site
                            built with ReactJS.  Payment system with Stripe
                            and Sagas to make everything run smooth.
                        Built as part of ZTM's React Course. Credit to andrei and Yihua.
                        </p>
                        </FlipCardInner>
                    </FlipCardBack>
                </FlipCard>
                <FlipCard>
                    <FlipCardFront img={computer}><h1>ASTEROIDS</h1></FlipCardFront>
                    <FlipCardBack >
                        <FlipCardInner>
                        <h2>Save the Galaxy</h2>
                        <p>Dodge and Blast your way through an asteroid field.
                            Be careful though, some asteroids get smalled as expected,
                            but some will grow the weaker they become.
                            <br/><br/>
                            Grab power ups on your way but avoid the Luminous
                            green space acid at all costs. It will clog your pistols
                            and disable your firing mechanisms
          
                        </p>
                        </FlipCardInner>
                    </FlipCardBack>
                </FlipCard>
                <FlipCard>
                    <FlipCardFront img={computer}><h1>FACE RECOG APP</h1></FlipCardFront>
                    <FlipCardBack >
                        <FlipCardInner>
                        <h2>Find Faces in Images</h2>
                        <p>A Learning Project.
                            A stylish E-commerce site
                            built with ReactJS.  Payment system with Stripe
                            and Sagas to make everything run smooth.
                        Built as part of ZTM's React Course. Credit to andrei and Yihua.
                        </p>
                        </FlipCardInner>
                    </FlipCardBack>
                </FlipCard>
                <FlipCard>
                    <FlipCardFront img={computer}><h1>E-COMM APP</h1></FlipCardFront>
                    <FlipCardBack >
                        <FlipCardInner>
                        <h2>Crown Clothing</h2>
                        <p>A Learning Project.
                            A stylish E-commerce site
                            built with ReactJS.  Payment system with Stripe
                            and Sagas to make everything run smooth.
                        Built as part of ZTM's React Course. Credit to andrei and Yihua.
                        </p>
                        </FlipCardInner>
                    </FlipCardBack>
                </FlipCard>
            </FlipCardContainer>
          
          
      </MainContainer>
     
    )
}

export default SecondaryProject;