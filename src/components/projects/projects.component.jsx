import React from 'react';
import SurvEndScreen from '../../imgs/survivalscreenshot.png';
import RPGscreen from '../../imgs/rpg.png';
import {
    ImageAspect,
    ProjectImage,
    ProjectColumns, ProjectArticle
} from './project.styles.jsx';
import {
        TextContainer,
        TitleContainer,       
        MainContainer
} from '../sectionstyles/sectionstyles.styles';
import {} from '../sectionstyles/sectionstyles.styles';


const description='Project Descriptions input';
const text ='Here is where I would explain all of the details of the project. \nList some cool languages or libraries';
const Image =({imageUrl})=>{
    return(<ImageAspect>
    <ProjectImage alt='' src={imageUrl}/>
</ImageAspect>)
};
const Description=({description,text})=>{
    const newText =text.split('\n').map((str,i)=><p key={i}>{str}</p>);
return(
    <ProjectArticle>
    <TitleContainer smFontSize='24' >
        {description}
    </TitleContainer >
    <TextContainer>
       {newText}
    </TextContainer>

</ProjectArticle>
)
};


const Projects =()=>{
//this doesnt work because its renders once
//it will work for when it is being rendered on a set size screen -e.g. mobile or desktop
    let width = window.innerWidth;
    if (width < 850){
        return(
        <div>
        <MainContainer >
        <ProjectColumns>
            <Image imageUrl={SurvEndScreen}/>
            <Description description={description} text={text}/>
            
            <Image imageUrl={RPGscreen}/>
            <Description description={description} text={text}/>
            
        </ProjectColumns>
    </MainContainer>
    </div>)
    }
    else{
    return(
        <div >
            <MainContainer projects>
                <ProjectColumns  fourCol>
                    <Description description={description} text={text}/>
                    <Image imageUrl={SurvEndScreen}/>
                    <Description description={description} text={text}/>
                  
                    <Image imageUrl={RPGscreen}/>
                    <Description description={description} text={text}/>
                    <Image imageUrl={SurvEndScreen}/>
                    <Description description={description} text={text}/>
                  
                    <Image imageUrl={RPGscreen}/>
                    
                </ProjectColumns>
            </MainContainer>
        </div>
    )}

}

export default Projects;

