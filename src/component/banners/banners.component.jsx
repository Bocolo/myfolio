import React from 'react';
import {Section, 
    TwoColumnGrid,
    OneColumnGrid,
    LeftCol,
    RightCol,
    MainContainer,
    TextContainer} 
    from '../../components/sectionstyles/sectionstyles.styles';
import {ProfileImg,
        BoxContainer
} from './banners.styles';
import bluepaint from '../../imgs/bluepaint.jpg';
import profile from '../../imgs/profile.jpg';
const Banner2 = () => {

    return(
        <Section >
            <MainContainer >
                
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
                      
                            <BoxContainer border='4px solid #b5838d' background ='#ffcdb2' boxShadow='0px 0px 30px 10px #b5838d' >
                                <TextContainer fontWeight='bold' fontSize='25px' paddingTop='25px' >What I do</TextContainer>
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

export default Banner2;