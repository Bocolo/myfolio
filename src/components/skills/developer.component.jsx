import React from 'react';
import {Section, BoxContainer,
DevColumn,DevContainer,
TitleContainer, TextContainer} from '../sectionstyles/sectionstyles.styles';
import {SvgStyle} from '../icons/icons.styles';
import {ReactComponent as Brain} from '../../svgs/workinglate.svg';

import styled from 'styled-components';
const DevColumns=styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
text-align: center;

@media(max-width:714px){
    grid-template-columns: 1fr;
}

`;
export const SvgSt= styled.div`
display:flex;
margin:10px;
justify-content:center;
svg{
width:130px;height:130px;}`
const Developer =()=>{
    return(
       <Section>
           <DevContainer>
           
                <BoxContainer width='80%' height='auto'>
                    <DevColumns>
                        <DevColumn>
                            <SvgSt><Brain/></SvgSt>
                            <TitleContainer fontSize='1.4em' smFontSize='1.2'>React Developer</TitleContainer>
                            <p>Building responsive and elegant sites is made easy with ReactJS. </p>
                            <p></p>
                            <p>
                                ReactJS makes it easy to build elegant, responsive websites with clean, resueable code.
                            </p>
                        </DevColumn>
                        <DevColumn borderRight='0px'>
                                
                        <SvgSt><Brain/></SvgSt>
                            <TitleContainer fontSize='1.4em' smFontSize='1.2'>Game Developer</TitleContainer>
                            <p>
                                Bringing game ideas to life is a true passion for me. 
                                I love creating engaging and 
                                Lorum Ipsums baby!
                            </p>
                            <p>Fr</p>
                        </DevColumn>
                    </DevColumns>
                </BoxContainer>
       </DevContainer>
       </Section>
    )
};


export default Developer;