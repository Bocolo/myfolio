import React from 'react';

import {
    ClearField,
    ProjectImageContainer,
    ImageAspect,
    ProjectImage,
   
    Overflow,
    ProjectColumns, ProjectArticle
} from './project.styles.jsx';
import {BoxContainer,
        TextContainer,
        TitleContainer,
        SkillsContainer,
        ColumnSide,
        MainContainer
} from '../sectionstyles/sectionstyles.styles';
import {} from '../sectionstyles/sectionstyles.styles';


const imageUrl = 'http://mrmrs.github.io/photos/colouranything.jpg';
const description='Project Descriptions input';
const text ='Here is where I would explain all of the details of the project. \nList some cool languages or libraries';
const Image =({imageUrl})=>{
    return(<ImageAspect>
    <ProjectImage alt='' src={imageUrl}/>
</ImageAspect>)
};
const Description=({description,text})=>{
    const newText =text.split('\n').map(str=><p>{str}</p>);
return(
    <ProjectArticle>
    <TitleContainer paddingTop='100px'>
        {description}
    </TitleContainer>
    <TextContainer>
       {newText}
    </TextContainer>

</ProjectArticle>
)
}


const Projects =()=>{
//this doesnt work because its renders once
//it will work for when it is being rendered on a set size screen -e.g. mobile or desktop
    let width = window.innerWidth;
    if (width < 850){
        return(
        <div>
        <MainContainer >
        <ProjectColumns>
            <Image imageUrl={imageUrl}/>
            <Description description={description} text={text}/>
            
            <Image imageUrl={imageUrl}/>
            <Description description={description} text={text}/>
        </ProjectColumns>
    </MainContainer>
    </div>)
    }
    else{
    return(
        <div >
            <MainContainer>
                <ProjectColumns>
                    <Description description={description} text={text}/>
                    <Image imageUrl={imageUrl}/>
                    <Image imageUrl={imageUrl}/>
                    <Description description={description} text={text}/>
                </ProjectColumns>
            </MainContainer>
        </div>
    )}

}

export default Projects;

{/*
     <div>
                <ProjectImageContainer>
                    <ImageAspect>
                      
                        <TitleContainer paddingTop='100px'>
                            Project Descriptions
                        </TitleContainer>
                        <TextContainer>
                            <br/>
                            <br/>
                            Here is where I would explain all of the details of the project.
                            <br/>
                            <br/>
                            List some cool languages or libraries
                        </TextContainer>
                    
                    </ImageAspect>
                </ProjectImageContainer>
                
                <ProjectImageContainer>
                        <ImageAspect>
                            <ProjectImage alt='' src='http://mrmrs.github.io/photos/justice.jpg'/>
                        </ImageAspect>
                </ProjectImageContainer>
                <ProjectImageContainer>
                        <ImageAspect>
                            <ProjectImage alt='' src='http://mrmrs.github.io/photos/colouranything.jpg'/>
                        </ImageAspect>
                </ProjectImageContainer>
                <ProjectImageContainer>
                 
                    <TitleContainer paddingTop='100px'>
                            Project Descriptions
                        </TitleContainer>
                        <TextContainer>
                            <br/>
                            <br/>
                            Here is where I would explain all of the details of the project.
                            <br/>
                            <br/>
                            List some cool languages or libraries
                        </TextContainer>
                   
                </ProjectImageContainer>
            
         
            
            </div>
         
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    <article className="cf">
<div className="fl w-50 w-24-ns">
        
<div className="db aspect-ratio aspect-ratio--1x1 dim">
            <span  style={{backgroundImage:`url(http://mrmrs.github.io/photos/justice.jpg)`}} className="bg-center cover aspect-ratio--object"></span>
        </div>

    </div>
    <div className="fl w-25 w-24-ns">
        
        <div className="db aspect-ratio aspect-ratio--1x1 dim">
            <span  style={{backgroundImage:`url(http://mrmrs.github.io/photos/colouranything.jpg)`}} className="bg-center cover aspect-ratio--object"></span>
        </div>

    </div>
    <div className="fl w-20 w-24-ns">
        
        <div className="db aspect-ratio aspect-ratio--1x1 dim">
            <span  style={{backgroundImage:`url(http://mrmrs.github.io/photos/colouranything.jpg)`}} className="bg-center cover aspect-ratio--object"></span>
        </div>

    </div>
    <div className="fl w-25 w-24-ns">
        
        <div className="db aspect-ratio aspect-ratio--1x1 dim">
            <span  style={{backgroundImage:`url(http://mrmrs.github.io/photos/colouranything.jpg)`}} className="bg-center cover aspect-ratio--object"></span>
        </div>

    </div>

</article> */}