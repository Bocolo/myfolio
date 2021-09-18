import React from 'react';
import Icons from '../../components/icons/icons.component';
import {Section, 
    TextContainer,
    BoxContainer,
    SkillsContainer,
    ColumnSide,
TitleContainer} 
    from '../../components/sectionstyles/sectionstyles.styles';
import { SkillsIcons} from './personal.styles';
import pythonico from '../../imgs/pythonico.svg';
import cssico from '../../imgs/cssico.svg';



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
                                            <Icons  image={pythonico} iname='CSS' />
                                            <Icons  image={cssico} iname='ReactJS' />
                                            <Icons  image={pythonico} iname='HTML5' />
                                            <Icons  image={cssico} iname='SQL' />
                                            <Icons  image={cssico} iname='JavaScript' />
                                            <Icons  image={cssico} iname='C#' />
                                            <Icons  image={cssico} iname='Python' />
                                            <Icons  image={pythonico} iname='IBM SPSS' />
                                            <Icons  image={pythonico} iname='JSON' />
                                        </div>
                                        <div>
                                           
                                            <Icons  image={pythonico} iname='VsCode' />
                                            <Icons  image={cssico} iname='Unity' />
                                            <Icons  image={pythonico} iname='Git Bash' />
                                            <Icons  image={cssico} iname='Postman' />
                                            <Icons  image={pythonico} iname='NodeJs' />
                                            <Icons  image={cssico} iname='Github' />
                                            <Icons  image={cssico} iname='Jupyter' />
                                            <Icons  image={cssico} iname='pgAdmin' />
                                            <Icons  image={pythonico} iname='postgreSql' />
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


  