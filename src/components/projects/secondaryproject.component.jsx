import React, {useState} from 'react';
import RPGscreen from '../../imgs/rpg.png';
import survivalScreen from '../../imgs/survivalscreenshot.png';
import crnwomen from '../../imgs/crnwomen.png';
import facerecog from '../../imgs/facecaptureclosest.png';
import asteroids from  '../../imgs/asteroids4.png';
import './secondaryproject.styles.scss';
import { TitleContainer} from '../sectionstyles/sectionstyles.styles';
import {FlipCard,FlipCardBack,FlipCardFront,FlipCardInner, FlipCardContainer, FlipCardFrontTwo,
FullContainer,ATag, ProjectContainerCollapsable,CollapseMeButton, CollapseButtonContainer} from './project.styles';
const SecondaryProject =()=>{
const [hidden, setHidden] = useState(false)
    return(
      <FullContainer >
        
          <TitleContainer paddingBottom ='20px' fontSize="3em" smFontSize="1.6em" smPadBot="30px" >
              Some Past Projects
            </TitleContainer>

      
           
            {hidden?(<div></div>):(
            <ProjectContainerCollapsable>
                <FlipCardContainer>
                
                
                    <FlipCard>
                        <FlipCardFront img={crnwomen}></FlipCardFront>
                        <FlipCardBack >
                            <FlipCardInner>
                
                            <TitleContainer color='#FDE74C'>CROWN CLOTHING</TitleContainer>
                            <p>A Learning Project.
                            <br/><br/>
                                A stylish E-commerce site
                                built with ReactJS.  Payment system with Stripe
                                and Sagas to make everything run smooth.
                                <br/><br/>
                            Built as part of ZTM's React Course. Credit to andrei and Yihua.
                            <br/><br/>
                            <a href='#'  target="_blank"  rel="noreferrer" aria-hidden='true'>
                                    <svg className=""  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
                                    </a>
                            </p>
                            </FlipCardInner>
                        </FlipCardBack>
                    </FlipCard>
                    <FlipCard>
                        <FlipCardFrontTwo  img={asteroids}></FlipCardFrontTwo>
                        <FlipCardBack >
                            <FlipCardInner>
                
                            <TitleContainer color='#FDE74C'>SAVE THE GALAXY</TitleContainer>
                            <p>Dodge and Blast your way through an asteroid field.
                                Be careful though, some asteroids get smaller as expected,
                                but some will grow the weaker they become.
                                <br/><br/>
                                Grab power ups on your way but avoid the Luminous
                                green space acid at all costs. It will clog your pistols
                                and disable your firing mechanisms
                                <br/><br/>
                                On your mobile right now? Check out this site on your desktop
                                for a chance to play.
                                <br/><br/>
                
                                    <a href='https://github.com/Bocolo/Shooter' rel="noreferrer" target="_blank" aria-hidden='true'>
                                    <svg className=""  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
                                    </a>
                
                            </p>
                            </FlipCardInner>
                        </FlipCardBack>
                    </FlipCard>
                    <FlipCard>
                        <FlipCardFront img={facerecog}></FlipCardFront>
                        <FlipCardBack >
                            <FlipCardInner>
                            <TitleContainer color='#FDE74C'>FACE RECOGNITION APP</TitleContainer>
                
                            <p>A Learning Project.
                            <br/><br/>
                            A web app that allows you to input image urls and find faces in those images.
                                Sign up for an account and keep track of how many face-finding expeditions you've
                                gone on.
                                <br/><br/>
                            Built as part of ZTM's React Course. Credit to andrei.
                            <br/><br/>
                
                                    <ATag color='#FDE74C' href='https://face-app-recog.herokuapp.com/'  target='_blank' aria-hidden='true'>   Click here to visit the site</ATag>
                            </p>
                            </FlipCardInner>
                        </FlipCardBack>
                    </FlipCard>
                    <FlipCard>
                        <FlipCardFront img={RPGscreen}></FlipCardFront>
                        <FlipCardBack >
                            <FlipCardInner>
                            <TitleContainer color='#FDE74C'>COMBAT RPG</TitleContainer>
                
                            <p>A Learning Project.
                            <br/><br/>
                                What is your weapon of choice? Arrows, sword, or are you
                                more of a fireball kind of gal?
                                <br/>
                                Built with unity, this game contains all the
                                core combat capabilities you need.
                                Gather your weapons, destroy your enemies, be brazen or sneaky,
                                but watch out, if enemies spot you, they will come for you.
                
                                <br/><br/>
                                Built as part of GameDev.tv Combat course.
                            <br/><br/>  <a href='https://github.com/Bocolo/RPG-Game' target='_blank' rel="noreferrer" aria-hidden='true'>
                                    <svg className=""  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                                        <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
                                    </a>
                            </p>
                            </FlipCardInner>
                        </FlipCardBack>
                    </FlipCard>
                    <FlipCard>
                        <FlipCardFront img={survivalScreen}></FlipCardFront>
                        <FlipCardBack >
                            <FlipCardInner>
                            <TitleContainer color='#FDE74C'>SURVIVAL</TitleContainer>
                
                            <p>A simple survival game.
                                Shoot up as many enemies as you can,
                                kill enough and activate golden coins,
                                giving you a chance to take your revenge,
                                Pac-man style.
                                <br/> <br/>
                                Gain health by devouring your deactivated enemies.
                                But be warned, you only have so much time
                                before they come back with a vengence.
                                <br/><br/>
                            <a href='https://github.com/Bocolo/Survival-Game'  target='_blank' rel="noreferrer" aria-hidden='true'>
                                    <svg className=""  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
                                    </a>
                                </p>
                            </FlipCardInner>
                        </FlipCardBack>
                    </FlipCard>
                </FlipCardContainer>
            </ProjectContainerCollapsable>
            )
            
            }
                  <CollapseButtonContainer>
                <CollapseMeButton onClick={() =>setHidden(!hidden)}>
                    {hidden?('Show'):('Hide')}
                   
                    
                    </CollapseMeButton>
            </CollapseButtonContainer>
      </FullContainer>
     
    )
}

export default SecondaryProject;