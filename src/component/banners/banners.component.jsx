import React from 'react';
import {Section, 
    TwoColumnGrid,
    OneColumnGrid,
    LeftCol,
    RightCol,
    MainContainer} 
    from '../../components/sectionstyles/sectionstyles.styles';
import {ProfileImg,
        BoxContainer,
        TextContainer
} from './banners.styles';
import bluepaint from '../../imgs/bluepaint.jpg';
const Banner2 = () => {

    return(
        <Section >
            <MainContainer >
                This is the styled component Main Container
                <TwoColumnGrid border='1px solid white'>
                    <LeftCol>
                        <OneColumnGrid>
                            <LeftCol  paddingTop='0px' paddingBottom='0px'>Left Column Centered</LeftCol>
                            <ProfileImg src={bluepaint}/>  
                            <LeftCol paddingTop='0px' paddingBottom='0px'>This is gonna be my profile sections</LeftCol>
                        </OneColumnGrid>
                    </LeftCol>
                    <RightCol>
                        <OneColumnGrid>
                            <BoxContainer >
                                <TextContainer>Testing Box</TextContainer>
                            </BoxContainer>
                         </OneColumnGrid>
                     </RightCol>
                </TwoColumnGrid>
            </MainContainer>
        </Section>

    )
}

export default Banner2;