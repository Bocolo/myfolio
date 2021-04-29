import React from 'react';
import Icons from '../../components/icons/icons.component';
import {Section, 
    TwoColumnGrid,
    OneColumnGrid,
    LeftCol,
    RightCol,
    MainContainer,
    TextContainer,
    BoxContainer,
    SkillsContainer,
    ColumnSide,
TitleContainer} 
    from '../../components/sectionstyles/sectionstyles.styles';
import {AboutContainer, 
    
    SkillsIcons,
    BoxBorder
    
} from './personal.styles';
import pythonico from '../../imgs/pythonico.svg';
import cssico from '../../imgs/cssico.svg';
// import {BoxContainer} from '../banners/banners.styles';


const Personal =() =>{

    return (
       <Section>
            <ColumnSide >
                <SkillsContainer>

                    <TitleContainer fontSize='48px'  textAlign='center'>ABOUT ME SECTION</TitleContainer>
                     
                        <TextContainer fontSize='24px' lineHeight='1.5' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor sem maximus, porttitor neque sit amet, mollis ipsum. Donec aliquam sem non lorem tempor malesuada. Cras luctus odio eu turpis egestas, eget elementum tortor pellentesque. Mauris varius volutpat magna sit amet vestibulum. Nullam non orci libero. Etiam efficitur dui nisl, et eleifend ipsum viverra nec. Fusce accumsan metus non vulputate lobortis. Donec eu nisi accumsan, sollicitudin est ac, lobortis mi. Vestibulum consequat ultricies mauris nec pellentesque. Mauris pulvinar tincidunt tincidunt. Aenean est erat, pharetra ac quam ac, suscipit blandit nisi. Sed a elementum mi, convallis molestie erat.
                        </TextContainer>
                       
                </SkillsContainer>
                <SkillsContainer >
                    <TitleContainer paddingBottom='50px'fontSize='48px'  textAlign='center'>SKILLS</TitleContainer>
                   
                            <br/>
                                                
                            <BoxContainer  height='auto' width='auto'  border='4px solid #b5838d' boxShadow='0px 0px 30px 10px #b5838d' >
                               
                                    <TextContainer lineHeight='1.5' fontSize='28px'>
                                    <SkillsIcons>
                                        <div>
                                            <Icons  image={pythonico} iname='IBM SPSS' />
                                            <Icons  image={cssico} iname='ReactJS' />
                                            <Icons  image={pythonico} iname='HTML5' />
                                            <Icons  image={cssico} iname='SQL' />
                                            <Icons  image={cssico} iname='Krita' />
                                        </div>
                                        <div>
                                            <Icons  image={pythonico} iname='IBM SPSS' />
                                            <Icons  image={cssico} iname='ReactJS' />
                                            <Icons  image={pythonico} iname='HTML5' />
                                            <Icons  image={cssico} iname='SQL' />
                                            <Icons  image={cssico} iname='Krita' />
                                            </div>
                                        
                                    </SkillsIcons>
                                    </TextContainer>
                                
                            </BoxContainer>
                    </SkillsContainer>
            </ColumnSide>
        </Section>
    )
};

export default Personal;


   {/* <div className='title tc ttu f3 f2-m f1-l fw2  mv3'>About Me Section</div> */}
    {/* <div className='f5 tc f4-m f3-l fw2 mt0 lh-copy'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor sem maximus, porttitor neque sit amet, mollis ipsum. Donec aliquam sem non lorem tempor malesuada. Cras luctus odio eu turpis egestas, eget elementum tortor pellentesque. Mauris varius volutpat magna sit amet vestibulum. Nullam non orci libero. Etiam efficitur dui nisl, et eleifend ipsum viverra nec. Fusce accumsan metus non vulputate lobortis. Donec eu nisi accumsan, sollicitudin est ac, lobortis mi. Vestibulum consequat ultricies mauris nec pellentesque. Mauris pulvinar tincidunt tincidunt. Aenean est erat, pharetra ac quam ac, suscipit blandit nisi. Sed a elementum mi, convallis molestie erat.
                        </div> */}
     {/* <div className='ttu tc f3 f2-m f1-l fw2  mv3'> Skills</div> */}
      {/* <div  className=' f3 f6-m pa2  lh-copy'></div> */}