import React from 'react';
import Icons from '../../components/icons/icons.component';
import {Section, 
    TwoColumnGrid,
    OneColumnGrid,
    LeftCol,
    RightCol,
    MainContainer} 
    from '../../components/sectionstyles/sectionstyles.styles';
import {AboutContainer, 
    SkillsContainer,
    SkillsIcons,
    BoxBorder,
    ColumnSide
} from './personal.styles';
import pythonico from '../../imgs/pythonico.svg';
import cssico from '../../imgs/cssico.svg';
import {BoxContainer} from '../banners/banners.styles';
import SkillsBox from '../../components/skillbox/skillbox.component';

const Personal =() =>{

    return (
       <Section>
              
                    <ColumnSide >
                            <SkillsContainer>
                                    <div className='title tc ttu f3 f2-m f1-l fw2 white-90 mv3'>About Me Section</div>
                                    <div className='f5 tc f4-m f3-l fw2 white-50 mt0 lh-copy'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor sem maximus, porttitor neque sit amet, mollis ipsum. Donec aliquam sem non lorem tempor malesuada. Cras luctus odio eu turpis egestas, eget elementum tortor pellentesque. Mauris varius volutpat magna sit amet vestibulum. Nullam non orci libero. Etiam efficitur dui nisl, et eleifend ipsum viverra nec. Fusce accumsan metus non vulputate lobortis. Donec eu nisi accumsan, sollicitudin est ac, lobortis mi. Vestibulum consequat ultricies mauris nec pellentesque. Mauris pulvinar tincidunt tincidunt. Aenean est erat, pharetra ac quam ac, suscipit blandit nisi. Sed a elementum mi, convallis molestie erat.
                                    </div>
                            </SkillsContainer>
                            <SkillsContainer >
                               <div className='ttu tc f3 f2-m f1-l fw2  mv3'> Skills</div>
                                   <br/>
                                                      
                                   <BoxContainer  height='auto' width='auto' >
                                       <div  className=' f3 f6-m pa2  lh-copy'>
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
                                       </div>
                                   </BoxContainer>
                            </SkillsContainer>
                       </ColumnSide>
              
          
       </Section>
    )
};

export default Personal;