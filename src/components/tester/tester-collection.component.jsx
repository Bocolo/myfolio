import React from 'react';
import Tester from './tester.component';
import './tester-collection.styles.scss';

import {ProjectContainer,
    ProjectTitle,
    ProjectItems

} from './tester.styles.jsx';
const TesterCollection =()=>{


    const title = 'This is Project Title';

    return (
      <div>
        <div className='brack'> 
           
            <div className='project-page '>
            <div className='project-page-title tc '>{title.toUpperCase()}</div>
            <div className='items'>              
                <Tester/>
                <Tester/>
                <Tester/>
                <Tester/>
                <br></br>
            </div>
    </div>
    </div>       
        <ProjectContainer>
            <ProjectTitle>{title.toUpperCase()}</ProjectTitle>
            <ProjectItems>
                <Tester/>
                <Tester/>
                <Tester/>
                <Tester/>
            </ProjectItems>
        </ProjectContainer>
  
        </div>
    )
}

export default TesterCollection;