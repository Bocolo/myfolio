import React from 'react';
import './tester.styles.scss';
import {ProjectItemContainer, 
    ProjectImage,
    ProjectFooter,
    ProjectDetails
} from './tester.styles.jsx';


const Tester =({item})=> {

    const name = 'Project One';
    const details = 'These are the Project details. A React built website incorporating Stripe Payment and redux sagas ';
    const imageUrl ='http://mrmrs.github.io/photos/justice.jpg';
    return (
        
        <ProjectItemContainer>
            <ProjectImage src={imageUrl}/>
            <ProjectFooter>
                <ProjectDetails>
                    {name}
                </ProjectDetails>
            </ProjectFooter>
            <ProjectFooter>
                <ProjectDetails marginTop='15px'>
                    {details}
                </ProjectDetails>
            </ProjectFooter>
        </ProjectItemContainer>
    )
};

export default Tester;

