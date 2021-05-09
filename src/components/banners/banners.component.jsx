import React from 'react';
import {Section, 
    TwoColumnGrid,
    OneColumnGrid,
    LeftCol,
    RightCol,
    MainContainer,
    TextContainer,
    BoxContainer} 
    from '../../components/sectionstyles/sectionstyles.styles';
import {ProfileImg
} from './banners.styles';
import profile from '../../imgs/profile.jpg';
import bluepaint from '../../imgs/bluepaint.jpg';

const Banner = () => {

    return(
        <Section >
            <MainContainer width='1300'>
                
                <TwoColumnGrid border='0px solid white'>
                    <LeftCol>
                      
                            {/* <LeftCol  paddingTop='0px' paddingBottom='0px'>A lil about me </LeftCol> */}
                            <ProfileImg src={profile} borderRadius='50%'/>  
                            <LeftCol paddingTop='0px' paddingBottom='0px'>
                            <br/>
                                My Profile Picture ^^
                                <br/> <br/>
                                Theme Picker to Be Placed Here
                            </LeftCol>
                       
                    </LeftCol>
                    <RightCol>
                      
                            <BoxContainer   boxShadow='0px 0px 30px 10px #b5838d' >
                                <TextContainer fontWeight='bold' fontSize='25px' paddingTop='25px' >Who am I</TextContainer>
                                <TextContainer textAlign='left'>
                                    
                                    I am a software developer, interested in web development and game design
                                    
                                </TextContainer>
                            </BoxContainer>
                         
                     </RightCol>
                </TwoColumnGrid>
            </MainContainer>
        </Section>

    )
}

export default Banner;