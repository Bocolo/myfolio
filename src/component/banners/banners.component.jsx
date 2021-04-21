import React from 'react';
import {Section, 
    TwoColumnGrid,
    OneColumnGrid,
    LeftCol,
    RightCol,
    MainContainer} 
    from '../../components/sectionstyles/sectionstyles.styles';
import {ProfileImg,
        BoxContainer
} from './banners.styles';
import bluepaint from '../../imgs/bluepaint.jpg';
const Banner2 = () => {

    return(
        <Section >
            <MainContainer >
                This is the styled component
                <TwoColumnGrid>
                  {/* I do not need seperate column components YET - currently the Same */}
                    <LeftCol>
                        <OneColumnGrid>
                            <div>Left Column Centered</div>
                            <ProfileImg src={bluepaint}/>  
                            <LeftCol paddingTop='0px' paddingBottom='0px'>This is gonna be my profile sections</LeftCol>
                            
                        
                        </OneColumnGrid>
                    </LeftCol>
                    <RightCol>
                        <OneColumnGrid>
                            {/* <RightCol paddingTop='0px' paddingBottom='0px'>Right Column Centered</RightCol> */}
                            <BoxContainer >
                            <div>Testing Box</div>
                                
                            </BoxContainer>
                            {/* <RightCol paddingTop='0px' paddingBottom='0px'>Right Column Centered</RightCol>
                            <RightCol paddingTop='0px' paddingBottom='0px'>Right Column Centered</RightCol> */}
                        
                        </OneColumnGrid>

                    </RightCol>
                </TwoColumnGrid>
            </MainContainer>
        </Section>

    )
}

export default Banner2;