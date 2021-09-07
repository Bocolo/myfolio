import React from 'react';

import {ReactComponent as CSharp} from '../../svgs/csharp.svg';
import {ReactComponent as CSS} from '../../svgs/css.svg';
import {ReactComponent as HTML} from '../../svgs/html.svg';
import {ReactComponent as JavaScript} from '../../svgs/javascript.svg';
import {ReactComponent as Python} from '../../svgs/python.svg';
import {ReactComponent as Reacti} from '../../svgs/react.svg';
import {SvgJS,SvgPy,SvgStyle,
    SvgCSS, SvgHTML, SvgReact, IconContainer} from '../icons/icons.styles.jsx';
import {MeContainer} from '../../components/me/me.styles';
import {SkillsIcons} from '../../component/personal/personal.styles';
import {FlipCardContainer} from '../../components/projects/project.styles';
import {SmallText, MainText} from '../animated/animated.styles';





const Languages =() => {

    return(
        
            <MeContainer  > 
                 {/* borderRadius ='0px 190px 0px 190px'  borderRadiusSm ='150px' borderRadiusXSm ='100px' */}
                <SmallText fontWeight='bold' paddingTop='0px' paddingBottom='20px' fontSize='1.6em' >
                    {/* textTransform='uppercase' */}
                    Skills 
                    </SmallText>
                    {/* <MainText fontSize='1.6em'>Skills</MainText> */}
                        <FlipCardContainer marginBottom='1em'>
                            <SvgJS><JavaScript/></SvgJS>
                            <SvgStyle><CSharp/></SvgStyle>
                            
                            <SvgPy><Python/></SvgPy>
                            <SvgReact><Reacti/></SvgReact>
                            <SvgCSS><CSS/></SvgCSS>
                            <SvgHTML><HTML/></SvgHTML>
                        </FlipCardContainer>
                        <FlipCardContainer marginBottom='1em'gridGap='29px'>
                            <div>
                            <SmallText textAlign='left' lineHeight='1' paddingTop='10px' >Unity</SmallText>
                            </div>
                            <div>
                            <SmallText textAlign='left' lineHeight='1' paddingTop='10px'>IBM SPSS</SmallText>
                               
                            </div>
                            <div> 
                            <SmallText textAlign='left' lineHeight='1' paddingTop='10px'>PgAdmin</SmallText>
                            </div>
                            <div>       
                                <SmallText textAlign='left' lineHeight='1' paddingTop='10px'>NodeJS</SmallText>
                            </div>
                            <div>               
                                <SmallText textAlign='left' lineHeight='1' paddingTop='10px'>Github</SmallText>
                                
                            </div>
                            <div>
                            <SmallText textAlign='left' lineHeight='1' paddingTop='10px'>Jupyter Notebook</SmallText>
                            </div><div>            
                                <SmallText textAlign='left' lineHeight='1' paddingTop='10px'>SQL</SmallText>
                            </div>
                            <div>
                            <SmallText textAlign='left' lineHeight='1' paddingTop='10px'>VS Code</SmallText>
                            </div><div>       
                                <SmallText textAlign='left' lineHeight='1' paddingTop='10px'>GitBash</SmallText>
                            </div><div>         
                                <SmallText textAlign='left' lineHeight='1' paddingTop='10px'>PostgreSql</SmallText>
                                
                            </div>
                        </FlipCardContainer>
                    
               
              
                
            </MeContainer>
           
        
    
    );
}

export default Languages;