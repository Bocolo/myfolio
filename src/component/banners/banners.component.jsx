import React from 'react';
import {Section, 
    TwoColumnGrid,
    LeftCol,
    RightCol,
    MainContainer} 
    from '../../components/sectionstyles/sectionstyles.styles';


const Banner2 = () => {

    return(
        <Section background='darkkhaki' >
            <MainContainer >
                This is the styled component
                <TwoColumnGrid>
                  {/* I do not need seperate column components YET - currently the Same */}
                    <LeftCol>Left Column Centered</LeftCol>
                    <RightCol>Right Column Centered</RightCol>
                </TwoColumnGrid>
            </MainContainer>
        </Section>

    )
}

export default Banner2;